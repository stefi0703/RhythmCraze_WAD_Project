package org.example.backend.controllers;

import org.springframework.web.bind.annotation.*;
import org.example.backend.domain.Song;
import org.example.backend.services.SongService;

import java.util.List;

@RestController
@RequestMapping("/songs")
public class SongController {
    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping
    public List<Song> getAllSongs() {
        return songService.findAll();
    }

    @GetMapping("/{id}")
    public Song getSongById(@PathVariable Long id) {
        return songService.findById(id);
    }

    @PostMapping
    public Song createSong(@RequestBody Song song) {
        return songService.save(song);
    }

    @PutMapping("/{id}")
    public Song updateSong(@PathVariable Long id, @RequestBody Song song) {
        song.setId(id);
        return songService.save(song);
    }

    @DeleteMapping("/{id}")
    public void deleteSong(@PathVariable Long id) {
        songService.deleteById(id);
    }
}
