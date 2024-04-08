package org.example.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "order_line_items")
public class OrderLineItem extends BaseEntity<Long> {
    @OneToOne
    private Ticket ticket;
    private int qty;
}
