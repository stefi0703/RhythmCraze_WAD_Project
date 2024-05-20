package org.example.backend.services;

import org.example.backend.domain.ConcertOrder;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.dto.OrderDto;

public interface ConcertOrderService {
    void save(ConcertOrder concertOrder);

    ConcertOrder findOrCreateOrder(Long userId);

    void addOrderLineItemToOrder(OrderLineItem orderLineItem, Long orderId);

    OrderDto getOrderDtoById(Long orderId);
}

