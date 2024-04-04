package org.example.backend.domain;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Data
public class OrderLineItem {

    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private Concert concert;
    private int qty;
}
