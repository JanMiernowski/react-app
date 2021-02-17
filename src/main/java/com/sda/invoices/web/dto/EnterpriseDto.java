package com.sda.invoices.web.dto;


public class EnterpriseDto extends ContractorDto{

    private String enterpriseName;
    private String taxNumber;


    public EnterpriseDto(String enterpriseName, String taxNumber) {
        this.enterpriseName = enterpriseName;
        this.taxNumber = taxNumber;
    }

    public EnterpriseDto() {
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
