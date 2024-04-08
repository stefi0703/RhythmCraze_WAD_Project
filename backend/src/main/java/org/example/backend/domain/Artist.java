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

    public Artist(String name, int age) {
        this.name = name;
        this.age = age;
    }

}
