package com.shubham.NaanStop.service;

import com.shubham.NaanStop.entity.Food;
import com.shubham.NaanStop.entity.Category;
import com.shubham.NaanStop.repository.FoodRepository;
import com.shubham.NaanStop.repository.CategoryRepository;
import com.shubham.NaanStop.responsewrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ResponseWrapper responseWrapper;

    public ResponseEntity<?> createFood(Long categoryId, Food food) {
        // Fetch the category using the category ID from the food object
        Category foundCategory = categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category ID does not exist")
        );
        food.setCategory(foundCategory);
        // Set the found category in the food object
        Food savedFood = foodRepository.save(food);
        responseWrapper.setMessage("Following food item added");
        responseWrapper.setData(savedFood);
        return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
    }

    public ResponseEntity<?> deleteFoodById(long id) {
        if (foodRepository.existsById(id)) {
            foodRepository.deleteById(id);
            responseWrapper.setMessage("Food item deleted successfully");
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
        } else {
            responseWrapper.setMessage("Food item not found");
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<?> getFoodById(long id) {
        Optional<Food> existingFood = foodRepository.findById(id);
        if (existingFood.isPresent()) {
            responseWrapper.setMessage("Following food found");
            responseWrapper.setData(existingFood.get());
            return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
        } else {
            responseWrapper.setMessage("ID does not exist");
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<?> updateFoodById(long id, Food food) {
        Food foundFood = foodRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Food not found with given id: " + id)
        );

        food.setId(id);
        food.setCategory(foundFood.getCategory());
        food.setVeg(foundFood.isVeg());
        foundFood.setImageUrl(food.getImageUrl());
        foundFood.setCategory(food.getCategory());
        food.setAvailable(foundFood.isAvailable());

        Food updatedFood = foodRepository.save(food);
        responseWrapper.setMessage("Updated");
        responseWrapper.setData(updatedFood);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }

    public List<Food> getFoodsByCategory(String category) {
        return foodRepository.findByCategoryName(category);
    }

    public List<Food> getFoodsByCategoryAndSortByPrice(String category, String sort) {
        if (sort.equals("priceAsc")) {
            return foodRepository.findByCategoryNameOrderByPriceAsc(category);
        } else {
            return foodRepository.findByCategoryNameOrderByPriceDesc(category);
        }
    }

    public ResponseEntity<?> getAllFoods() {
        List<Food> allFoods = foodRepository.findAll();
        responseWrapper.setMessage("Following Foods found");
        responseWrapper.setData(allFoods);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }
}
