package com.shubham.NaanStop.repository;

import com.shubham.NaanStop.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

    @Query("SELECT f FROM Food f WHERE f.category.name = :categoryName")
    List<Food> findByCategoryName(String categoryName);

    @Query("SELECT f FROM Food f WHERE f.category.name = :categoryName ORDER BY f.price ASC")
    List<Food> findByCategoryNameOrderByPriceAsc(String categoryName);

    @Query("SELECT f FROM Food f WHERE f.category.name = :categoryName ORDER BY f.price DESC")
    List<Food> findByCategoryNameOrderByPriceDesc(String categoryName);

}
