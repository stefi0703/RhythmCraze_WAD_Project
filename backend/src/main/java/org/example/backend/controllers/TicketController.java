package org.example.backend.controllers;

import org.example.backend.domain.enums.TicketType;
import org.example.backend.services.TicketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/prices")
    public ResponseEntity<Double> getTicketPrice(@RequestParam Long concertId, @RequestParam TicketType ticketType) {
        // Logic to retrieve ticket price based on concert ID and ticket type
        double price = ticketService.calculateTicketPrice(concertId, ticketType);
        return ResponseEntity.ok(price);
    }
}
