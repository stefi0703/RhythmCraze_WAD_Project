package org.example.backend.services;

import org.example.backend.domain.ConcertOrder;
import org.example.backend.dto.OrderDto;

public interface ConcertOrderService {
    void save(ConcertOrder concertOrder);

    void addToCart(OrderDto request);
}

