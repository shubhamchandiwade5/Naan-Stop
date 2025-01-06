//package com.shubham.NaanStop.controller;
//
//import com.shubham.NaanStop.entity.Food;
//import com.shubham.NaanStop.service.FoodService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin("*")
//public class FoodController {
//
//    @Autowired
//    private FoodService foodService;
//
//    @PostMapping(value = "/foods/category/{categoryId}")
//    public ResponseEntity<?> createFood(@PathVariable Long categoryId, @RequestBody Food food) {
//        return foodService.createFood(categoryId, food);
//    }
//
//    @GetMapping(value = "/foods", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<?> getFoods(@RequestParam(required = false) String category) {
//        if (category != null && !category.isEmpty()) {
//            List<Food> filteredFoods = foodService.getFoodsByCategory(category);
//            return ResponseEntity.ok(filteredFoods);
//        } else {
//            return foodService.getAllFoods();
//        }
//    }
//
//    @DeleteMapping("/foods/{id}")
//    public ResponseEntity<?> deleteFoodById(@PathVariable long id) {
//        return foodService.deleteFoodById(id);
//    }
//
//    @GetMapping(value = "/foods/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<?> getFoodById(@PathVariable long id) {
//        return foodService.getFoodById(id);
//    }
//
//    @PutMapping(value = "/foods/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<?> updateFoodById(@PathVariable long id, @RequestBody Food food) {
//        return foodService.updateFoodById(id, food);
//    }
//}

package com.shubham.NaanStop.controller;

import com.shubham.NaanStop.entity.Food;
import com.shubham.NaanStop.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @PostMapping(value = "/foods/category/{categoryId}")
    public ResponseEntity<?> createFood(@PathVariable Long categoryId, @RequestBody Food food) {
        return foodService.createFood(categoryId, food);
    }

    @GetMapping(value = "/foods", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFoods(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            List<Food> filteredFoods = foodService.getFoodsByCategory(category);
            return ResponseEntity.ok(filteredFoods);
        } else {
            return foodService.getAllFoods();
        }
    }

    @DeleteMapping("/foods/{id}")
    public ResponseEntity<?> deleteFoodById(@PathVariable long id) {
        return foodService.deleteFoodById(id);
    }

    @GetMapping(value = "/foods/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFoodById(@PathVariable long id) {
        return foodService.getFoodById(id);
    }

    @PutMapping(value = "/foods/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateFoodById(@PathVariable long id, @RequestBody Food food) {
        return foodService.updateFoodById(id, food);
    }
}

