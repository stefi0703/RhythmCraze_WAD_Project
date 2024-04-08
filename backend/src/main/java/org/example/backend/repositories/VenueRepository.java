package org.example.backend.repositories;

import org.example.backend.domain.Venue;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VenueRepository extends JpaRepository<Venue, Long> {
    @Query("select v from Venue v")
    @EntityGraph(value = "venue-with-concerts", type = EntityGraph.EntityGraphType.LOAD)
    List<Venue> findAllWithConcerts();
}
