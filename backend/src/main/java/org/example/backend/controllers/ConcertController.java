package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.domain.Venue;
import org.example.backend.dto.ConcertDto;
import org.example.backend.services.ConcertService;
import org.example.backend.domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@Slf4j
@RequestMapping("/concerts")
public class ConcertController {
    private final ConcertService concertService;

    public ConcertController(ConcertService concertService) {
        this.concertService = concertService;
    }

    @GetMapping
    public ResponseEntity<List<ConcertDto>> getAllConcertsWithArtistsAndVenues() {
        List<ConcertDto> concerts = concertService.findAllWithArtistAndVenues();
        return ResponseEntity.ok(concerts);
    }


    @PostMapping
    public String addConcert(Concert concert) {
        concertService.save(concert);
        return "redirect:/concerts";
    }

    //filter concerts
    @GetMapping("/filter")
    public ResponseEntity<List<ConcertDto>> filterConcerts(
            @RequestParam(required = false) String artist,
            @RequestParam(required = false) List<Date> dates,
            @RequestParam(required = false) List<String> venueNames) {

        List<ConcertDto> filteredConcerts = concertService.filterConcerts(artist, dates, venueNames);
        return ResponseEntity.ok(filteredConcerts);
    }

}
