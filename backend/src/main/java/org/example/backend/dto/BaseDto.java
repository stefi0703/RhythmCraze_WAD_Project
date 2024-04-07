package org.example.backend.dto;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public abstract class BaseDto implements Serializable {
    private Long id;
}

