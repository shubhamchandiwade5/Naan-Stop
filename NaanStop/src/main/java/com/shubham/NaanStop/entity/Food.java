package com.shubham.NaanStop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

@Entity
@Data
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Size(min=3, max=50, message="food name must be between 3-50 characters")
    @Column(nullable = false)
    private String name;

    @Min(value = 0, message = "min food price must be 0")
    @Max(value = 1000, message = "food price must be less than 1000")
    @Column(nullable = false)
    private double price;

    private boolean isVeg;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name="category_id")
    @JsonIgnore
    private Category category;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean available;
}
