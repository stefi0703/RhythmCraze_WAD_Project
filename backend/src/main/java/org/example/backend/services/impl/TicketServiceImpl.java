package org.example.backend.services.impl;

import org.example.backend.domain.Concert;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.repositories.ConcertRepository;
import org.example.backend.repositories.OrderLineItemRepository;
import org.example.backend.repositories.TicketRepository;
import org.example.backend.services.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;
    private final ConcertRepository concertRepository;
    private final OrderLineItemRepository orderLineItemRepository;  // Assuming you have this repository

    public TicketServiceImpl(TicketRepository ticketRepository, ConcertRepository concertRepository, OrderLineItemRepository orderLineItemRepository) {
        this.ticketRepository = ticketRepository;
        this.concertRepository = concertRepository;
        this.orderLineItemRepository = orderLineItemRepository;
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket getTicketById(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        return optionalTicket.orElse(null);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    @Override
    public OrderLineItem createAndSaveOrderLineItem(Long concertId, TicketType ticketType, int quantity) {
        Optional<Concert> optionalConcert = concertRepository.findById(concertId);
        if (!optionalConcert.isPresent()) {
            throw new IllegalArgumentException("Concert not found with ID: " + concertId);
        }
        Concert concert = optionalConcert.get();

        // Find existing ticket or create a new one
        Optional<Ticket> existingTicket = ticketRepository.findByConcertAndType(concert, ticketType);
        Ticket ticket;
        double pricePerTicket = computeTicketPriceByType(concert.getPrice(), ticketType);
        ticket = new Ticket(ticketType, concert, pricePerTicket);
        ticket = ticketRepository.save(ticket);
//        if (existingTicket.isPresent()) {
//            ticket = existingTicket.get();
//        } else {
//            double pricePerTicket = computeTicketPriceByType(concert.getPrice(), ticketType);
//            ticket = new Ticket(ticketType, concert, pricePerTicket);
//            ticket = ticketRepository.save(ticket);
//        }

        OrderLineItem orderLineItem = new OrderLineItem();
        orderLineItem.setTicket(ticket);
        orderLineItem.setQty(quantity);
        return orderLineItemRepository.save(orderLineItem);
    }


    private double computeTicketPriceByType(double basePrice, TicketType ticketType) {
        switch (ticketType) {
            case GENERAL:
                return basePrice;  // no change for standard
            case VIP:
                return basePrice * 1.5;  // 50% more expensive
            case PREMIUM:
                return basePrice * 2;  // double the price
            default:
                throw new IllegalArgumentException("Invalid ticket type provided");
        }
    }

}
