package com.shubham.NaanStop.service;

import com.shubham.NaanStop.entity.Category;
import com.shubham.NaanStop.repository.CategoryRepository;
import com.shubham.NaanStop.responsewrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ResponseWrapper responseWrapper;

    public ResponseEntity<?> createCategory(Category category) {
        Category savedCategory = categoryRepository.save(category);
        responseWrapper.setMessage("Category added successfully");
        responseWrapper.setData(savedCategory);
        return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
    }

    public ResponseEntity<?> getCategoryById(long id) {
        Category categoryFound = categoryRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Id does not exist") );
        responseWrapper.setMessage("Following category found for given id");
        responseWrapper.setData(categoryFound);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);  // Update to OK status
    }

    public ResponseEntity<?> getAllCategories(){
        List<Category> categories = categoryRepository.findAll();
        responseWrapper.setMessage("Categories found");
        responseWrapper.setData(categories);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);  // Update to OK status
    }
}
