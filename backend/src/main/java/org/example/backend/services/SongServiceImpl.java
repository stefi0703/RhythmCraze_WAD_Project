package org.example.backend.services;

import org.example.backend.domain.Song;
import org.example.backend.repositories.SongRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SongServiceImpl implements SongService {
    private final SongRepository songRepository;

    public SongServiceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public List<Song> findAll() {
        return songRepository.findAll();
    }

    @Override
    public Song findById(Long id) {
        return songRepository.findById(id).orElse(null);
    }

    @Override
    public Song save(Song song) {
        return songRepository.save(song);
    }

    @Override
    public void deleteById(Long id) {
        songRepository.deleteById(id);
    }

    //saveAll method
    @Override
    public void saveAll(Iterable<Song> songs) {
        songRepository.saveAll(songs);
    }
}
