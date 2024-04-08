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
    private Date date;
    private double price;
}
