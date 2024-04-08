package org.example.backend.services.impl;

import org.example.backend.domain.Artist;
import org.example.backend.dto.ArtistDto;
import org.example.backend.repositories.ArtistRepository;
import org.example.backend.services.ArtistService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.example.backend.domain.Song;
@Service
@RequiredArgsConstructor
public class ArtistServiceImpl implements ArtistService {
    private final ArtistRepository artistRepository;


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

    //findAllWithSongs method
    @Override
    public List<ArtistDto> findAllArtistsWithSongs() {
        List<Artist> artists = artistRepository.findAllArtistsWithSongs();
        return artists.stream()
                .map(artist -> {
                    List<String> songTitles = artist.getSongs().stream()
                            .map(Song::getTitle)
                            .collect(Collectors.toList());
                    return new ArtistDto(artist.getName(), artist.getAge(), songTitles);
                })
                .collect(Collectors.toList());
    }


}
