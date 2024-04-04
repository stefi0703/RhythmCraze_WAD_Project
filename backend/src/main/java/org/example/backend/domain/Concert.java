package org.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.sql.Date;


@Entity
@Data
@NoArgsConstructor
public class Concert {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    @JsonIgnore
    @ManyToOne
    private Artist artist;

    @JsonIgnore
    @ManyToOne
    private Venue venue;

    private Date date;
    private double price;

    public Concert(String name, Artist artist, Venue venue, Date date, double price) {
        this.name = name;
        this.artist = artist;
        this.venue = venue;
        this.date = date;
        this.price = price;
    }
}
