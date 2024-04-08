package org.example.backend.dto;

import lombok.*;
import org.example.backend.dto.base.BaseDto;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SongDto extends BaseDto implements Serializable {
    private String title;
    private String genre;
}
