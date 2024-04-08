package org.example.backend.services.impl;

import org.example.backend.domain.Concert;
import org.example.backend.dto.ArtistDto;
import org.example.backend.dto.ConcertDto;
import org.example.backend.dto.VenueDto;
import org.example.backend.repositories.ConcertRepository;
import org.example.backend.services.ConcertService;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConcertServiceImpl implements ConcertService {
    private final ConcertRepository concertRepository;

    public ConcertServiceImpl(ConcertRepository concertRepository) {
        this.concertRepository = concertRepository;
    }

    @Override
    public void saveAll(Iterable<Concert> concerts) {
        concertRepository.saveAll(concerts);
    }

    @Override
    public List<Concert> findAll() {
        return concertRepository.findAll();
    }

    @Override
    public void save(Concert concert) {
        concertRepository.save(concert);
    }

    public List<ConcertDto> findAllWithArtistAndVenues() {
        List<Concert> concerts = concertRepository.findAllWithArtistAndVenues();
        return concerts.stream()
                .map(concert -> {
                    ArtistDto artistDto = new ArtistDto(
                            concert.getArtist().getName(),
                            concert.getArtist().getAge(),
                            null // Since we're not including songs in this DTO
                    );
                    List<VenueDto> venueDtos = concert.getVenues().stream()
                            .map(venue -> new VenueDto(venue.getName(), venue.getLocation(), null)) // Since we're not including concerts in venue DTO
                            .collect(Collectors.toList());
                    List<Date> dates = concert.getDates();
                    return new ConcertDto(
                            concert.getName(),
                            artistDto,
                            venueDtos,
                            dates, // List of dates
                            concert.getPrice()
                    );
                })
                .collect(Collectors.toList());
    }

}
