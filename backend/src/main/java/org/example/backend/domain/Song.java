package org.example.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
    private Genre genre;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinColumn
    @JsonIgnore
    private Artist artist;

    public Song(String title, Genre genre, Artist artist) {
        this.title = title;
        this.genre = genre;
        this.artist = artist;
    }
}

