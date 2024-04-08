package org.example.backend.services.impl;

import org.example.backend.domain.ConcertOrder;
import org.example.backend.repositories.ConcertOrderRepository;

import org.example.backend.services.ConcertOrderService;
import org.springframework.stereotype.Service;

@Service
public class ConcertOrderServiceImpl implements ConcertOrderService {
    private final ConcertOrderRepository concertOrderRepository;

    public ConcertOrderServiceImpl(ConcertOrderRepository concertOrderRepository) {
        this.concertOrderRepository = concertOrderRepository;
    }

    @Override
    public void save(ConcertOrder concertOrder) {
        concertOrderRepository.save(concertOrder);
    }
}
