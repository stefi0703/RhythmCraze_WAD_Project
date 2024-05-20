package org.example.backend.services.impl;

import org.example.backend.domain.ConcertOrder;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.domain.Ticket;
import org.example.backend.dto.OrderDto;
import org.example.backend.repositories.ConcertOrderRepository;
import org.example.backend.repositories.TicketRepository;
import org.example.backend.services.ConcertOrderService;
import org.springframework.stereotype.Service;

@Service
public class ConcertOrderServiceImpl implements ConcertOrderService {
    private final ConcertOrderRepository concertOrderRepository;

    private final TicketRepository ticketRepository;

    public ConcertOrderServiceImpl(ConcertOrderRepository concertOrderRepository,TicketRepository ticketRepository) {
        this.concertOrderRepository = concertOrderRepository;
        this.ticketRepository = ticketRepository;
    }

    @Override
    public void save(ConcertOrder concertOrder) {
        concertOrderRepository.save(concertOrder);
    }

    @Override
    public void addToCart(OrderDto request) {
        // Logic to find or create an order
        ConcertOrder order = concertOrderRepository.findOrCreateOrder(request.getUserId());

        // Logic to create order line item
        Ticket ticket = ticketRepository.findById(request.getTicketId()).orElseThrow(() -> new RuntimeException("Ticket not found"));
        OrderLineItem lineItem = new OrderLineItem(ticket, request.getQuantity());

        // Add line item to order
        order.addLineItem(lineItem);

        // Save order
        concertOrderRepository.save(order);
    }
}
