package org.example.backend.dto;

import lombok.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SongDto extends BaseDto implements Serializable {
    private String title;
    private String genre;
    private Long artistId;
}
