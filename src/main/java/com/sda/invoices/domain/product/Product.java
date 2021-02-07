package com.sda.invoices.domain.product;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String description;
    private BigDecimal priceNet;
    @Enumerated(EnumType.STRING)
    private Vat vat;

    public Product(Long id, String name, String description, BigDecimal priceNet, Vat vat) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priceNet = priceNet;
        this.vat = vat;
    }

    public Product() {
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public BigDecimal getPriceNet() {
        return this.priceNet;
    }

    public Vat getVat() {
        return this.vat;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPriceNet(BigDecimal priceNet) {
        this.priceNet = priceNet;
    }

    public void setVat(Vat vat) {
        this.vat = vat;
    }


    public enum Vat{

        VAT_8(8),
        VAT_23(23);

        int value;

        Vat(int value) {
            this.value = value;
        }

        public int getValue() {
            return this.value;
        }
    }
}
