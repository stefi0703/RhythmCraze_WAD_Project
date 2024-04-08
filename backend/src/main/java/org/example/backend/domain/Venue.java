package org.example.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;

import java.util.List;
@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "venues")
public class Venue extends BaseEntity<Long> {

    private String name;
    private String location;

    @OneToMany(mappedBy = "venue")
    private List<Concert> concerts;
    public Venue(String name, String location) {
        this.name = name;
        this.location = location;
    }
}
