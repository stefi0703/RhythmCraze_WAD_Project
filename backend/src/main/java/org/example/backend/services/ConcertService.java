package org.example.backend.services;

import org.example.backend.domain.Concert;
import org.example.backend.dto.ConcertDto;

import java.sql.Date;
import java.util.List;


public interface ConcertService {
    void saveAll(Iterable<Concert> concerts);
    List<Concert> findAll();
    Concert save(Concert concert);

    List<ConcertDto> findAllWithArtistAndVenues();
    //List<ConcertDto> findAllWithArtistAndVenuesAndDates();
    List<ConcertDto> filterConcerts(String artist, List<Date> dates, List<String> venueNames);

    void deleteById(Long id);

    Concert update(Long id, Concert concert);

    ConcertDto findById(Long id);
}
