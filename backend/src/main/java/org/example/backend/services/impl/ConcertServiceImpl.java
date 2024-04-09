package org.example.backend.services.impl;

import org.example.backend.domain.Artist;
import org.example.backend.domain.Concert;
import org.example.backend.domain.Venue;
import org.example.backend.dto.ArtistDto;
import org.example.backend.dto.ConcertDto;
import org.example.backend.dto.VenueDto;
import org.example.backend.repositories.ConcertRepository;
import org.example.backend.services.ConcertService;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
    @Override
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
    //filter based on artist name, venue name, and date
    @Override
    public List<ConcertDto> filterConcerts(String artist, List<Date> dates, List<String> venueNames) {
        Stream<Concert> concertStream = concertRepository.findAllWithArtistAndVenues().stream();

        if (artist != null && !artist.isEmpty()) {
            concertStream = concertStream.filter(concert -> concert.getArtist().getName().equalsIgnoreCase(artist));
        }

        if (dates != null && !dates.isEmpty()) {
            concertStream = concertStream.filter(concert -> dates.containsAll(concert.getDates()));
        }

        if (venueNames != null && !venueNames.isEmpty()) {
            concertStream = concertStream.filter(concert -> {
                List<String> concertVenueNames = concert.getVenues().stream()
                        .map(Venue::getName)
                        .collect(Collectors.toList());
                return concertVenueNames.containsAll(venueNames);
            });
        }

        return concertStream.map(concert -> {
            // Extract required data from concert and create ConcertDto object
            String artistName = concert.getArtist().getName(); // Extract only the name of the artist
            ArtistDto artistDto = new ArtistDto(artistName, 0,null); // Create ArtistDto with only name populated
            List<VenueDto> venueDtos = concert.getVenues().stream()
                    .map(venue -> new VenueDto(venue.getName(), null, null))
                    .collect(Collectors.toList());
            List<Date> concertDates = concert.getDates();
            return new ConcertDto(concert.getName(), artistDto, venueDtos, concertDates, concert.getPrice());
        }).collect(Collectors.toList());

    }





}
