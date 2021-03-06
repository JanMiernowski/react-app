package com.sda.invoices.web.dto;

public class ProductSearchDto {

    private final String name;


    public ProductSearchDto(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
