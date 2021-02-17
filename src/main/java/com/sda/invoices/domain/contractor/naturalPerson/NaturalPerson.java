package com.sda.invoices.domain.contractor.naturalPerson;

import com.sda.invoices.domain.contractor.Contractor;

import javax.persistence.Entity;

@Entity
public class NaturalPerson extends Contractor {

    private String personName;
    private String personalIdentityNumber;

    public NaturalPerson() {
    }

    public NaturalPerson(String personName, String personalIdentityNumber) {
        this.personName = personName;
        this.personalIdentityNumber = personalIdentityNumber;
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
