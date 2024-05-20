package org.example.backend.services;

import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;

import java.util.List;

public interface TicketService {
    List<Ticket> getAllTickets();

    Ticket getTicketById(Long id);

    Ticket saveTicket(Ticket ticket);

    void deleteTicket(Long id);

    double calculateTicketPrice(Long concertId, TicketType ticketType);

    Ticket createTicket(Long concertId);
}
