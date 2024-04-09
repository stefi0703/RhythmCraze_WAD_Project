package org.example.backend.controllers;

import org.example.backend.dto.VenueDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.backend.domain.Venue;
import org.example.backend.services.VenueService;

import java.util.List;

@RestController
@RequestMapping("/venues")
public class VenueController {
    private final VenueService venueService;

    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping
    public ResponseEntity<List<VenueDto>> getAllVenuesWithConcerts() {
        List<VenueDto> venues = venueService.findAllWithConcerts();
        return ResponseEntity.ok(venues);
    }

//    @GetMapping
//    public List<Venue> getAllVenues() {
//        return venueService.findAll();
//    }

    @GetMapping("/{id}")
    public Venue getVenueById(@PathVariable Long id) {
        return venueService.findById(id);
    }

    @PostMapping
    public Venue createVenue(@RequestBody Venue venue) {
        return venueService.save(venue);
    }

    @PutMapping("/{id}")
    public Venue updateVenue(@PathVariable Long id, @RequestBody Venue venue) {
        venue.setId(id);
        return venueService.save(venue);
    }

    @DeleteMapping("/{id}")
    public void deleteVenue(@PathVariable Long id) {
        venueService.deleteById(id);
    }
}
