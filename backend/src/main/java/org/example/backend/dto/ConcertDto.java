package org.example.backend.dto;

import lombok.*;
import org.example.backend.dto.base.BaseDto;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ConcertDto extends BaseDto implements Serializable {
    private String name;
    private ArtistDto artist;
    private List<VenueDto> venues;
    private List<Date> dates; // List of dates
    private double price;

    public ConcertDto(Long id, String name, ArtistDto artistDto, List<VenueDto> venueDtos, List<Date> dates, double price) {
        super(id);
        this.name = name;
        this.artist = artistDto;
        this.venues = venueDtos;
        this.dates = dates;
        this.price = price;
    }
}
