package org.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;

import java.sql.Date;
import java.util.List;

@NamedEntityGraph(
        name = "concert-with-artist-and-venues",
        attributeNodes = {
                @NamedAttributeNode(value = "artist"),
                @NamedAttributeNode(value = "venues")
        }
)
@NamedEntityGraph(
        name = "concert-with-artist-and-venues-and-dates",
        attributeNodes = {
                @NamedAttributeNode(value = "artist"),
                @NamedAttributeNode(value = "venues"),
                @NamedAttributeNode(value = "dates")
        }
)

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "concerts")
public class Concert extends BaseEntity<Long> {

    private String name;
    @OneToOne
    private Artist artist;


    @ManyToMany
    @JoinTable(
            name = "concert_venue",
            joinColumns = @JoinColumn(name = "concert_id"),
            inverseJoinColumns = @JoinColumn(name = "venue_id")
    )
    private List<Venue> venues;

    @ElementCollection
    private List<Date> dates; // Changed type to List<Date>

    private double price;


    // Constructor with name, artist, venues, dates, base price
    public Concert(String name, Artist artist, List<Venue> venues, List<Date> dates, double price) {
        this.name = name;
        this.artist = artist;
        this.venues = venues;
        this.dates = dates;
        this.price = price;
    }

    @OneToOne(mappedBy = "concert")
    private Ticket ticket;

}
