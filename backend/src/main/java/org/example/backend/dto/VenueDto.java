package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.dto.base.BaseDto;

import java.io.Serializable;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VenueDto extends BaseDto implements Serializable {
    private String name;
    private String location;
    private List<String> concertsNames;
}
