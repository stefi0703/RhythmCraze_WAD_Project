package org.example.backend.services;

import org.example.backend.domain.OrderLineItem;

import java.util.List;

public interface OrderLineItemService {
    List<OrderLineItem> getAllOrderLineItems();

    OrderLineItem getOrderLineItemById(Long id);

    OrderLineItem saveOrderLineItem(OrderLineItem orderLineItem);

    void deleteOrderLineItem(Long id);
}
