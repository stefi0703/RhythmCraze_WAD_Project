package org.example.backend.services.impl;

import org.example.backend.domain.Venue;
import org.example.backend.dto.ArtistDto;
import org.example.backend.dto.ConcertDto;
import org.example.backend.dto.VenueDto;
import org.example.backend.repositories.VenueRepository;
import org.example.backend.services.VenueService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VenueServiceImpl implements VenueService {
    private final VenueRepository venueRepository;

    public VenueServiceImpl(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    @Override
    public List<Venue> findAll() {
        return venueRepository.findAll();
    }

    @Override
    public Venue findById(Long id) {
        return venueRepository.findById(id).orElse(null);
    }

    @Override
    public Venue save(Venue venue) {
        return venueRepository.save(venue);
    }

    @Override
    public void saveAll(Iterable<Venue> venues) {
        venueRepository.saveAll(venues);
    }

    @Override
    public void deleteById(Long id) {
        venueRepository.deleteById(id);
    }

    @Override
    public List<VenueDto> findAllWithConcerts() {
        List<Venue> venues = venueRepository.findAllWithConcerts();
        return venues.stream()
                .map(venue -> {
                    List<String> concertNames = venue.getConcerts().stream()
                            .map(concert -> concert.getName())
                            .collect(Collectors.toList());
                    return new VenueDto(
                            venue.getName(),
                            venue.getLocation(),
                            concertNames
                    );
                })
                .collect(Collectors.toList());
    }
}
