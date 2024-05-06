package org.example.backend.controllers;

import org.example.backend.domain.User;
import org.example.backend.dto.UserDto;

import org.example.backend.security.JwtUtil;
import org.example.backend.security.UserRepoUserDetailsService;
import org.example.backend.services.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    private final JwtUtil jwtUtil;
    private final UserRepoUserDetailsService userDetailsService;


    public UserController(JwtUtil jwtUtil, UserRepoUserDetailsService userDetailsService) {
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto user){
        User authenticated = userDetailsService.checkUserCredentials(user.getUsername(), user.getPassword());
        if (authenticated != null){
            String jwtToken = jwtUtil.generateToken(user.getUsername());
            return new ResponseEntity<>(jwtToken, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        User registeredUser = userDetailsService.register(userDto);
        if (registeredUser != null) {
            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to register user", HttpStatus.BAD_REQUEST);
        }
    }
}