package com.sda.invoices.web.dto;

public abstract class ContractorDto {

    private Long id;
    private String email;
    private String bank;
    private AddressDto address;

    public ContractorDto(Long id, String email, String bank, AddressDto address) {
        this.id = id;
        this.email = email;
        this.bank = bank;
        this.address = address;
    }

    public ContractorDto() {
    }

    public Long getId() {
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    public String getBank() {
        return this.bank;
    }

    public AddressDto getAddress() {
        return this.address;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }
}
