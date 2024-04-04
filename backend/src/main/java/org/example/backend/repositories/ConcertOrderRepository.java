package org.example.backend.repositories;


import org.example.backend.domain.ConcertOrder;
import org.springframework.data.repository.CrudRepository;

public interface ConcertOrderRepository extends CrudRepository<ConcertOrder, Long> {
}

