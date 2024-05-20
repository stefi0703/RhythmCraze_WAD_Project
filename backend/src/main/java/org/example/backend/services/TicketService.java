package org.example.backend.services;

import jakarta.transaction.Transactional;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;

import java.util.List;

public interface TicketService {
    List<Ticket> getAllTickets();

    Ticket getTicketById(Long id);


    void deleteTicket(Long id);

//    OrderLineItem createAndSaveOrderLineItem(Long concertId, TicketType ticketType, int quantity);

    Ticket save(Ticket ticket);

    @Transactional
    public OrderLineItem createAndSaveOrderLineItem(Long concertId, TicketType ticketType, int quantity, String username);
}
