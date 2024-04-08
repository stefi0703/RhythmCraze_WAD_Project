package org.example.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;

import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "concert_orders")
public class ConcertOrder extends BaseEntity<Long> {
    @OneToMany(cascade = CascadeType.ALL)
    private Set<OrderLineItem> orderLineItems = new HashSet<>();
}
