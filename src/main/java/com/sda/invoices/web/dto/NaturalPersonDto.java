package com.sda.invoices.web.dto;

public class NaturalPersonDto extends  ContractorDto{

    private String personName;
    private String personalIdentityNumber;


    public NaturalPersonDto(String personName, String personalIdentityNumber) {
        this.personName = personName;
        this.personalIdentityNumber = personalIdentityNumber;
    }

    public NaturalPersonDto() {
    }

    public String getPersonName() {
        return this.personName;
    }

    public String getPersonalIdentityNumber() {
        return this.personalIdentityNumber;
    }

    public void setPersonName(String personName) {
        this.personName = personName;
    }

    public void setPersonalIdentityNumber(String personalIdentityNumber) {
        this.personalIdentityNumber = personalIdentityNumber;
    }
}
