package org.example.backend.services.impl;

import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.repositories.TicketRepository;
import org.example.backend.services.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;

    public TicketServiceImpl(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
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
    public Ticket saveTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    @Override
    public double calculateTicketPrice(Long concertId, TicketType ticketType) {
        // Fetch ticket from repository based on concertId
        Ticket ticket = ticketRepository.findByConcertIdAndType(concertId, ticketType);

        // Calculate ticket price based on ticket type and any other factors
        return ticket != null ? ticket.calculatePrice(ticketType, ticket.getConcert()) : 0; // Return 0 if ticket not found
    }
}
