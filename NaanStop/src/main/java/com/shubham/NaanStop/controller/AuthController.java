//package com.shubham.NaanStop.controller;
//
//import com.shubham.NaanStop.entity.User;
//import com.shubham.NaanStop.service.UserService;
//import jakarta.servlet.http.HttpSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody User user) {
//        userService.saveUser(user);
//        return ResponseEntity.ok("User registered successfully");
//    }
//
//    @GetMapping("/users")
//    public List<User> getAllUsers() {
//        return userService.findAllUsers();
//    }
//
//    @GetMapping("/users/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        User user = userService.findUserById(id).orElseThrow(() -> new RuntimeException("User not found"));
//        return ResponseEntity.ok(user);
//    }
//
//    @PutMapping("/users/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
//        User updatedUser = userService.updateUser(id, userDetails);
//        return ResponseEntity.ok(updatedUser);
//    }
//
//    @DeleteMapping("/users/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
//        userService.deleteUser(id);
//        return ResponseEntity.ok("User deleted successfully");
//    }
//
//
//
//}
package com.shubham.NaanStop.controller;

import com.shubham.NaanStop.entity.User;
import com.shubham.NaanStop.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginDetails, HttpSession session) {
        String username = loginDetails.get("username");
        String password = loginDetails.get("password");

        User user = userService.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            session.setAttribute("user", user);
            return ResponseEntity.ok().body(Map.of("success", true, "user", user));
        } else {
            return ResponseEntity.status(401).body(Map.of("success", false, "message", "Invalid credentials"));
        }
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findUserById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }

}
