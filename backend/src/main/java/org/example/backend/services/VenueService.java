package org.example.backend.services;

import org.example.backend.domain.Venue;
import java.util.List;

public interface VenueService {
    List<Venue> findAll();
    Venue findById(Long id);
    Venue save(Venue venue);
    void deleteById(Long id);

    //saveAll method
    void saveAll(Iterable<Venue> venues);
}
