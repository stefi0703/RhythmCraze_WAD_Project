package org.example.backend.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.backend.domain.base.BaseEntity;
import org.example.backend.domain.enums.TicketType;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tickets")
public class Ticket extends BaseEntity<Long> {


    private TicketType type;
    private double price;

    @OneToOne
    private Concert concert;

    private double vipPriceIncrement = 0.5;
    private double premiumPriceIncrement =0.2;

    // Constructor
    public Ticket(TicketType type, Concert concert, double price) {
        this.type = type;
        this.concert = concert;
        this.price = price;
    }

    public Ticket(Concert concert) {
        this.concert = concert;
    }

}
