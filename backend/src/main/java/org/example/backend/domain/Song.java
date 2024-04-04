package org.example.backend.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
public class Song {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String genre;

    @ManyToOne
    private Artist artist;

    public Song(String title, String genre, Artist artist) {
        this.title = title;
        this.genre = genre;
        this.artist = artist;
    }
}

