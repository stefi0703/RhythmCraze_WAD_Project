package org.example.backend.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
public class Venue {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String location;

    @OneToMany(mappedBy = "venue")
    private List<Concert> concerts;
    public Venue(String name, String location) {
        this.name = name;
        this.location = location;
    }
}
