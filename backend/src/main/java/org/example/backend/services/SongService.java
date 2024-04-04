package org.example.backend.services;

import org.example.backend.domain.Song;
import java.util.List;

public interface SongService {
    List<Song> findAll();
    Song findById(Long id);
    Song save(Song song);
    void deleteById(Long id);

    //saveAll method
    void saveAll(Iterable<Song> songs);
}
