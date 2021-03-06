package com.sda.invoices.domain.contractor;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

    private String street;
    private String city;
    private String zipCode;
    private String houseNumber;

    public Address(String street, String city, String zipCode, String houseNumber) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.houseNumber = houseNumber;
    }

    public Address() {
    }

    public String getStreet() {
        return this.street;
    }

    public String getCity() {
        return this.city;
    }

    public String getZipCode() {
        return this.zipCode;
    }

    public String getHouseNumber() {
        return this.houseNumber;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }
}
