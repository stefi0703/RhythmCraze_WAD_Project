package org.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;

import java.sql.Date;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "concerts")
public class Concert extends BaseEntity<Long> {

    private String name;
    @JsonIgnore
    @ManyToOne
    private Artist artist;

    @JsonIgnore
    @ManyToOne
    private Venue venue;

    private Date date;
    private double price;

}
