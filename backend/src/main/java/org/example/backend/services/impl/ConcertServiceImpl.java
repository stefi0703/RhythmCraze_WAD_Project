package org.example.backend.services.impl;

import org.example.backend.domain.Concert;
import org.example.backend.repositories.ConcertRepository;
import org.example.backend.services.ConcertService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConcertServiceImpl implements ConcertService {
    private final ConcertRepository concertRepository;

    public ConcertServiceImpl(ConcertRepository concertRepository) {
        this.concertRepository = concertRepository;
    }

    @Override
    public void saveAll(Iterable<Concert> concerts) {
        concertRepository.saveAll(concerts);
    }

    @Override
    public List<Concert> findAll() {
        return concertRepository.findAll();
    }

    @Override
    public void save(Concert concert) {
        concertRepository.save(concert);
    }
}
