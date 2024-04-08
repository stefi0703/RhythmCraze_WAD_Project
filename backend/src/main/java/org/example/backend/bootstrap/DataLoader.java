package org.example.backend.bootstrap;

import org.example.backend.domain.*;
import org.example.backend.domain.enums.Genre;
import org.example.backend.domain.enums.Role;
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

    public DataLoader(ConcertService concertService, ArtistService artistService,
                      VenueService venueService, SongService songService, UserService userService) {
        this.concertService = concertService;
        this.artistService = artistService;
        this.venueService = venueService;
        this.songService = songService;
        this.userService = userService;
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
        venueService.saveAll(venues);

        // Adding some concerts
        List<Concert> concerts = List.of(
                new Concert("Rock Concert", artists.get(0), venues.get(0), Date.valueOf("2024-04-10"), 50.0),
                new Concert("Pop Concert", artists.get(1), venues.get(1), Date.valueOf("2024-05-15"), 60.0),
                new Concert("Jazz Night", artists.get(2), venues.get(2), Date.valueOf("2024-06-20"), 40.0)
        );
        concertService.saveAll(concerts);

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
