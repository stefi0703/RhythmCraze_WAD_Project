package org.example.backend.controllers;

import org.example.backend.dto.OrderDto;
import org.example.backend.services.ConcertOrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final ConcertOrderService concertOrderService;

    public OrderController(ConcertOrderService concertOrderService) {
        this.concertOrderService = concertOrderService;
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<String> addToCart(@RequestBody OrderDto request) {
        try {
            concertOrderService.addToCart(request);
            return ResponseEntity.ok("Item added to cart successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding to cart: " + e.getMessage());
        }
    }

    // Other methods for managing orders, such as retrieving orders, updating orders, etc.
}
