package org.example.backend.services.impl;

import org.example.backend.domain.Concert;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.repositories.ConcertRepository;
import org.example.backend.repositories.TicketRepository;
import org.example.backend.services.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;

    private final ConcertRepository concertRepository;

    public TicketServiceImpl(TicketRepository ticketRepository, ConcertRepository concertRepository) {
        this.ticketRepository = ticketRepository;
        this.concertRepository = concertRepository;
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

    @Override
    public Ticket createTicket(Long concertId) {
        // Fetch the concert from the database
        Concert concert = concertRepository.findById(concertId).orElse(null);

        // Check if the concert exists
        if (concert == null) {
            throw new IllegalArgumentException("Concert not found with ID: " + concertId);
        }

        // Check if a ticket already exists for the specified concert
        Ticket existingTicket = ticketRepository.findByConcertId(concertId);
        if (existingTicket != null) {
            // If a ticket already exists, return it
            return existingTicket;
        }

        // Create a new ticket
        Ticket ticket = new Ticket(concert);

        // Save the ticket to the database
        return ticketRepository.save(ticket);
    }

}
