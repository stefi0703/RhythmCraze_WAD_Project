package org.example.backend.services;

import org.example.backend.domain.Artist;
import java.util.List;

public interface ArtistService {
    List<Artist> findAll();
    Artist findById(Long id);
    Artist save(Artist artist);
    void deleteById(Long id);

    //saveAll method
    void saveAll(Iterable<Artist> artists);
}
