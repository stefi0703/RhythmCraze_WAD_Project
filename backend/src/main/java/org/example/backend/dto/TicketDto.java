package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.Ticket;
import org.example.backend.dto.base.BaseDto;
import org.example.backend.domain.enums.TicketType;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TicketDto extends BaseDto implements Serializable {
    private Long id;
    private TicketType type;
    private double price;
    private String name; // Add a field for concert name

    public static TicketDto from(Ticket ticket) {
        return TicketDto.builder()
                .id(ticket.getId())
                .type(ticket.getType())
                .price(ticket.getPrice())
                .name(ticket.getConcert().getName()) // Set the concert name
                .build();
    }
}
