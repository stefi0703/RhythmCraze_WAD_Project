package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.dto.OrderLineItemDto;
import org.example.backend.dto.TicketDto;
import org.example.backend.services.TicketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.backend.domain.OrderLineItem;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping("/create")
    public ResponseEntity<OrderLineItemDto> createOrderLineItem(
            @RequestParam Long concertId,
            @RequestParam TicketType ticketType,
            @RequestParam int quantity,
            @RequestParam String username) {  // Use username to identify the user

        try {
            OrderLineItem orderLineItem = ticketService.createAndSaveOrderLineItem(concertId, ticketType, quantity, username);
            return ResponseEntity.status(HttpStatus.CREATED).body(OrderLineItemDto.from(orderLineItem));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }


}
