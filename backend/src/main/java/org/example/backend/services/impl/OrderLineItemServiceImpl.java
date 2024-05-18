package org.example.backend.services.impl;

import org.example.backend.domain.OrderLineItem;
import org.example.backend.repositories.OrderLineItemRepository;
import org.example.backend.services.OrderLineItemService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderLineItemServiceImpl implements OrderLineItemService {
    private final OrderLineItemRepository orderLineItemRepository;

    public OrderLineItemServiceImpl(OrderLineItemRepository orderLineItemRepository) {
        this.orderLineItemRepository = orderLineItemRepository;
    }

    @Override
    public List<OrderLineItem> getAllOrderLineItems() {
        return orderLineItemRepository.findAll();
    }

    @Override
    public OrderLineItem getOrderLineItemById(Long id) {
        Optional<OrderLineItem> optionalOrderLineItem = orderLineItemRepository.findById(id);
        return optionalOrderLineItem.orElse(null);
    }

    @Override
    public OrderLineItem saveOrderLineItem(OrderLineItem orderLineItem) {
        return orderLineItemRepository.save(orderLineItem);
    }

    @Override
    public void deleteOrderLineItem(Long id) {
        orderLineItemRepository.deleteById(id);
    }
}
