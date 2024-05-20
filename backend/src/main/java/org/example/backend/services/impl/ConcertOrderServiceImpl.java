package org.example.backend.services.impl;

import org.example.backend.domain.ConcertOrder;
import org.example.backend.domain.OrderLineItem;
import org.example.backend.domain.Ticket;
import org.example.backend.domain.User;
import org.example.backend.domain.enums.OrderStatus;
import org.example.backend.dto.OrderDto;
import org.example.backend.repositories.ConcertOrderRepository;
import org.example.backend.repositories.TicketRepository;
import org.example.backend.repositories.UserRepository;
import org.example.backend.services.ConcertOrderService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ConcertOrderServiceImpl implements ConcertOrderService {
    private final ConcertOrderRepository concertOrderRepository;
    private final UserRepository userRepository;

    public ConcertOrderServiceImpl(ConcertOrderRepository concertOrderRepository, UserRepository userRepository) {
        this.concertOrderRepository = concertOrderRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void save(ConcertOrder concertOrder) {
        concertOrderRepository.save(concertOrder);
    }

    @Override
    public ConcertOrder findOrCreateOrder(Long userId) {
        // Ensure that userId is not null
        if (userId == null) {
            throw new IllegalArgumentException("User ID must not be null");
        }

        return concertOrderRepository.findTopByUserIdAndStatus(userId, OrderStatus.ACTIVE)
                .orElseGet(() -> {
                    User user = userRepository.findById(userId).orElseThrow(
                            () -> new UsernameNotFoundException("User not found with ID: " + userId)
                    );
                    ConcertOrder newOrder = new ConcertOrder();
                    newOrder.setUser(user); // Set the user retrieved from the database
                    newOrder.setStatus(OrderStatus.ACTIVE);
                    return concertOrderRepository.save(newOrder); // Ensure the new order is saved
                });
    }


    @Override
    public void addOrderLineItemToOrder(OrderLineItem lineItem, Long orderId) {
        ConcertOrder order = concertOrderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalStateException("Order not found"));
        order.addLineItem(lineItem);
        concertOrderRepository.save(order);
    }

    @Override
    public OrderDto getOrderDtoById(Long orderId) {
        ConcertOrder order = concertOrderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalStateException("Order not found"));
        return OrderDto.from(order);
    }
}
