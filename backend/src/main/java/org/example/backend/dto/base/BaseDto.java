package org.example.backend.dto.base;

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

