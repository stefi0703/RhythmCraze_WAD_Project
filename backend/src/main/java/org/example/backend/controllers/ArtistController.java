package org.example.backend.controllers;

import org.example.backend.domain.Artist;
import org.example.backend.services.ArtistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/artists")
public class ArtistController {
    private final ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping
    public List<Artist> getAllArtists() {
        return artistService.findAll();
    }

    @GetMapping("/{id}")
    public Artist getArtistById(@PathVariable Long id) {
        return artistService.findById(id);
    }

    @PostMapping
    public Artist createArtist(@RequestBody Artist artist) {
        return artistService.save(artist);
    }

    @PutMapping("/{id}")
    public Artist updateArtist(@PathVariable Long id, @RequestBody Artist artist) {
        artist.setId(id);
        return artistService.save(artist);
    }

    @DeleteMapping("/{id}")
    public void deleteArtist(@PathVariable Long id) {
        artistService.deleteById(id);
    }
}