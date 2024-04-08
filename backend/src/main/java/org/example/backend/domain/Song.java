package org.example.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;
import org.example.backend.domain.enums.Genre;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "songs")
public class Song extends BaseEntity<Long> {


    private String title;
    private Genre genre;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinColumn
    @JsonIgnore
    private Artist artist;

}

