package org.example.backend.services;

import org.example.backend.domain.Concert;
import java.util.List;


public interface ConcertService {
    void saveAll(Iterable<Concert> concerts);
    List<Concert> findAll();
    void save(Concert concert);
}
