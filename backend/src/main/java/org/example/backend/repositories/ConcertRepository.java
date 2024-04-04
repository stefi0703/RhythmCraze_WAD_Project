package org.example.backend.repositories;


import org.example.backend.domain.Concert;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ConcertRepository extends CrudRepository<Concert, Long> {
    List<Concert> findAll();
}
