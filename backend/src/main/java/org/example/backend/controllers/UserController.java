package org.example.backend.controllers;

import org.example.backend.domain.User;
import org.example.backend.dto.UserDto;

import org.example.backend.security.JwtUtil;
import org.example.backend.security.UserRepoUserDetailsService;
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
}