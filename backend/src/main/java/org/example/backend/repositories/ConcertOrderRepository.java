package org.example.backend.repositories;


import org.example.backend.domain.ConcertOrder;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface ConcertOrderRepository extends CrudRepository<ConcertOrder, Long> {
    @Query("SELECT c FROM ConcertOrder c WHERE c.userId = :userId")
    ConcertOrder findByUser_Id(Long userId);

    default ConcertOrder findOrCreateOrder(Long userId) {
        ConcertOrder order = findByUser_Id(userId);
        if (order == null) {
            order = new ConcertOrder();
            // Set any other necessary fields for the new order
            // For example: order.setUserId(userId);
            save(order);
        }
        return order;
    }
}

