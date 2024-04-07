package org.example.backend.domain;



import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@NamedEntityGraph(name = "artist.songs", attributeNodes = @NamedAttributeNode("songs"))
public class Artist {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private int age;

    @OneToMany(mappedBy = "artist")
    private List<Song> songs = new ArrayList<>();

    public Artist(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
