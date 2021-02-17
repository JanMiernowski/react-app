package com.sda.invoices.domain.contractor.enterprise;

import com.sda.invoices.domain.contractor.Contractor;

import javax.persistence.Entity;

@Entity
public class Enterprise extends Contractor {

    private String enterpriseName;
    private String taxNumber;

    public Enterprise() {
        super();
    }

    public Enterprise(String enterpriseName, String taxNumber) {
        this.enterpriseName = enterpriseName;
        this.taxNumber = taxNumber;
    }

    public String getEnterpriseName() {
        return this.enterpriseName;
    }

    public String getTaxNumber() {
        return this.taxNumber;
    }

    public void setEnterpriseName(String enterpriseName) {
        this.enterpriseName = enterpriseName;
    }

    public void setTaxNumber(String taxNumber) {
        this.taxNumber = taxNumber;
    }
}
