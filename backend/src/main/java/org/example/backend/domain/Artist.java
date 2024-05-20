package org.example.backend.domain;



import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;


import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "artists")
@NamedEntityGraph(name = "artist.songs", attributeNodes = @NamedAttributeNode("songs"))
public class Artist extends BaseEntity<Long> {

    private String name;
    private int age;

    @OneToMany(mappedBy = "artist")
    private List<Song> songs = new ArrayList<>();

    @OneToOne(mappedBy = "artist")
    private Concert concert;

    public Artist(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //implement custom equals and hashcode methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Artist)) return false;
        if (!super.equals(o)) return false;

        Artist artist = (Artist) o;

        if (age != artist.age) return false;
        return name != null ? name.equals(artist.name) : artist.name == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + age;
        return result;
    }

}
