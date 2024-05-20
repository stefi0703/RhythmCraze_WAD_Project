package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.dto.base.BaseDto;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class OrderLineItemDto extends BaseDto implements Serializable {
    private Long id;
    private TicketDto ticketDto;
    private int quantity;

    public static OrderLineItemDto from(OrderLineItem orderLineItem) {
        return OrderLineItemDto.builder()
                .id(orderLineItem.getId())
                .ticketDto(TicketDto.from(orderLineItem.getTicket()))
                .quantity(orderLineItem.getQty())
                .build();
    }
}
