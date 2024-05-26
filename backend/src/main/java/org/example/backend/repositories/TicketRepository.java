package org.example.backend.repositories;


import org.example.backend.domain.Concert;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.enums.TicketType;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    // You can add custom query methods here if needed
//    @Query("SELECT t FROM Ticket t WHERE t.concert.id = :concertId AND t.type = :type")
//    Optional<Ticket> findByConcertIdAndType(@Param("concertId") Long concertId, @Param("type") TicketType type);

    @Query("SELECT t FROM Ticket t WHERE t.concert.id = :concertId")
    Ticket findByConcertId(@Param("concertId") Long concertId);


    Optional<Ticket> findByConcertAndType(Concert concert, TicketType ticketType);
    @Query("SELECT t FROM Ticket t WHERE t.type = :type")
    Optional<Ticket> findByType(TicketType type);
}
