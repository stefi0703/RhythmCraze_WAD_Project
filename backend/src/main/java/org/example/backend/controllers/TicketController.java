package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.dto.TicketDto;
import org.example.backend.services.TicketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public ResponseEntity<TicketDto> createTicket(@RequestParam Long concertId) {
        // Logic to create a ticket based on concert ID and ticket type
        Ticket ticket = ticketService.createTicket(concertId);
        return ResponseEntity.status(HttpStatus.CREATED).body(TicketDto.from(ticket));
    }

}
