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

    private Date date;
    private double price;
    private double vipPriceIncrement = 0.5;
    private double premiumPriceIncrement =0.2;

    //constructor with name,artist,venue,date,baseprice
    public Concert(String name, Artist artist, List<Venue> venues, Date date, double price) {
        this.name = name;
        this.artist = artist;
        this.venues = venues;
        this.date = date;
        this.price = price;
    }

    @OneToOne(mappedBy = "concert")
    private Ticket ticket;

}
