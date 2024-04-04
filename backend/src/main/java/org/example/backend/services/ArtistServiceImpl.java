package org.example.backend.services;

import org.example.backend.domain.Artist;
import org.example.backend.repositories.ArtistRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ArtistServiceImpl implements ArtistService {
    private final ArtistRepository artistRepository;

    public ArtistServiceImpl(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @Override
    public List<Artist> findAll() {
        return artistRepository.findAll();
    }

    @Override
    public Artist findById(Long id) {
        return artistRepository.findById(id).orElse(null);
    }

    @Override
    public Artist save(Artist artist) {
        return artistRepository.save(artist);
    }

    @Override
    public void deleteById(Long id) {
        artistRepository.deleteById(id);
    }

    //saveAll method
    @Override
    public void saveAll(Iterable<Artist> artists) {
        artistRepository.saveAll(artists);
    }
}
