package org.example.backend.bootstrap;

import org.example.backend.domain.*;
import org.example.backend.domain.enums.Genre;
import org.example.backend.domain.enums.Role;
import org.example.backend.domain.enums.TicketType;
import org.example.backend.services.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    private final ConcertService concertService;
    private final ArtistService artistService;
    private final VenueService venueService;
    private final SongService songService;
    private final UserService userService;
    private final TicketService ticketService;

    public DataLoader(ConcertService concertService, ArtistService artistService,
                      VenueService venueService, SongService songService, UserService userService, TicketService ticketService) {
        this.concertService = concertService;
        this.artistService = artistService;
        this.venueService = venueService;
        this.songService = songService;
        this.userService = userService;
        this.ticketService = ticketService;
    }

    @Override
    public void run(String... args) throws Exception {
        // Adding some artists
        List<Artist> artists = List.of(
                new Artist("Rock Band", 4),
                new Artist("Pop Star", 3),
                new Artist("Jazz Ensemble", 5)
        );
        artistService.saveAll(artists);

        // Adding some songs
        List<Song> songs = List.of(
                new Song("Rock Song 1", Genre.ROCK, artists.get(0)),
                new Song("Pop Song 1", Genre.POP, artists.get(1)),
                new Song("Jazz Song 1", Genre.JAZZ, artists.get(2))
        );
        songService.saveAll(songs);

// Adding some venues
        List<Venue> venues = List.of(
                new Venue("Rock Arena", "Location 1"),
                new Venue("Pop Hall", "Location 2"),
                new Venue("Jazz Club", "Location 3")
        );

// Save venues using venueService
        venueService.saveAll(venues);

// Fetch the saved venues from the database
        Venue venue1 = venueService.findById(1L);
        Venue venue2 = venueService.findById(2L);
        Venue venue3 = venueService.findById(3L);

// Adding some concerts with multiple venues
        List<Concert> concerts = List.of(
                new Concert("Rock Concert", artists.get(0), List.of(venue1), List.of(
                        Date.valueOf("2024-04-10"),
                        Date.valueOf("2024-04-11")
                ), 50.0),
                new Concert("Pop Concert", artists.get(1), List.of(venue2), List.of(
                        Date.valueOf("2024-05-15"),
                        Date.valueOf("2024-05-16")
                ), 60.0),
                new Concert("Jazz Night", artists.get(2), List.of(venue3, venue2), List.of(
                        Date.valueOf("2024-06-20"),
                        Date.valueOf("2024-06-21"),
                        Date.valueOf("2024-06-22")
                ), 40.0)
        );

// Save concerts using concertService
        concertService.saveAll(concerts);

//        //add a ticket
//        Ticket ticket = new Ticket();
//        ticket.setConcert(concerts.get(0));
//        ticket.setPrice(50.0);
//        ticket.setType(TicketType.VIP);
//        ticketService.save(ticket);




        // Adding some users
        PasswordEncoder bcrypt = new BCryptPasswordEncoder();
        User user1 = new User("user1", bcrypt.encode("user1"));
        user1.getRoles().add(Role.ROLE_USER);
        User user2 = new User("user2", bcrypt.encode("user2"));
        user2.getRoles().add(Role.ROLE_ADMIN);
        userService.save(user1);
        userService.save(user2);
    }
}
