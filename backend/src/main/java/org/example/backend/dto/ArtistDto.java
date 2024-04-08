package org.example.backend.dto;

import lombok.*;
import org.example.backend.domain.Artist;
import org.example.backend.dto.base.BaseDto;

import java.io.Serializable;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ArtistDto extends BaseDto implements Serializable {
    private String name;
    private int age;
    private List<String> songTitles;

}
