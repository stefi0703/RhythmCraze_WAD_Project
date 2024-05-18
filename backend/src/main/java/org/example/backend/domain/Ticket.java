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
    public Ticket(TicketType type, Concert concert) {
        this.type = type;
        this.concert = concert;
        this.price = calculatePrice(type, concert);
    }

    // Calculate ticket price based on ticket type and concert
    public double calculatePrice(TicketType type, Concert concert) {
        double basePrice = concert.getPrice();
        switch (type) {
            case GENERAL:
                return basePrice;
            case VIP:
                return basePrice + basePrice * vipPriceIncrement;
            case PREMIUM:
                return basePrice + basePrice * premiumPriceIncrement;
            default:
                return basePrice;
        }
    }
}
