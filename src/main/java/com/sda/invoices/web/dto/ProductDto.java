package com.sda.invoices.web.dto;

import com.sda.invoices.domain.product.Product;

import java.math.BigDecimal;

public class ProductDto {

    private Long id;
    private String name;
    private String description;
    private BigDecimal priceNet;
    private Product.Vat vat;

    public ProductDto(Long id, String name, String description, BigDecimal priceNet, Product.Vat vat) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priceNet = priceNet;
        this.vat = vat;
    }

    public ProductDto() {
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

    public Product.Vat getVat() {
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

    public void setVat(Product.Vat vat) {
        this.vat = vat;
    }
}
