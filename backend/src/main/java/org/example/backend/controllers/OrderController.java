package org.example.backend.controllers;

import jakarta.persistence.EntityNotFoundException;
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

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable Long orderId) {
        try {
            OrderDto order = concertOrderService.getOrderDtoById(orderId);
            return ResponseEntity.ok(order);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }



    // Other methods for managing orders, such as retrieving orders, updating orders, etc.
}
