package org.example.backend.repositories;


import org.example.backend.domain.Concert;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ConcertRepository extends CrudRepository<Concert, Long> {
    List<Concert> findAll();
    @Query("SELECT c FROM Concert c")
    @EntityGraph(value = "concert-with-artist-and-venues", type = EntityGraph.EntityGraphType.LOAD)
    List<Concert> findAllWithArtistAndVenues();

//    @Query("SELECT c FROM Concert c")
//    @EntityGraph(value = "concert-with-artist-and-venues-and-dates", type = EntityGraph.EntityGraphType.LOAD)
//    List<Concert> findAllWithArtistAndVenuesAndDates();

}
