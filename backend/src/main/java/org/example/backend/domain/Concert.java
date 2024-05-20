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

    @OneToMany(mappedBy = "concert")
    private List<Ticket> tickets;

    //implement custom equals and hashcode methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Concert)) return false;
        if (!super.equals(o)) return false;

        Concert concert = (Concert) o;

        if (Double.compare(concert.price, price) != 0) return false;
        if (name != null ? !name.equals(concert.name) : concert.name != null) return false;
        if (artist != null ? !artist.equals(concert.artist) : concert.artist != null) return false;
        if (venues != null ? !venues.equals(concert.venues) : concert.venues != null) return false;
        return dates != null ? dates.equals(concert.dates) : concert.dates == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        long temp;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (artist != null ? artist.hashCode() : 0);
        result = 31 * result + (venues != null ? venues.hashCode() : 0);
        result = 31 * result + (dates != null ? dates.hashCode() : 0);
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

}
