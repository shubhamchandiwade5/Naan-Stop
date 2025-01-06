package com.shubham.NaanStop.controller;

import com.shubham.NaanStop.entity.Category;
import com.shubham.NaanStop.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/categories")
    public ResponseEntity<?> createCategory(@RequestBody @Valid Category category) {
        return categoryService.createCategory(category);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable long id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/categories")
    public ResponseEntity<?> getAllCategories(){
        return  categoryService.getAllCategories();
    }


}
