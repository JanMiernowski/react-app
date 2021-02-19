package com.sda.invoices.domain.contractor.enterprise;

import com.sda.invoices.domain.contractor.ContractorRepository;

import java.util.List;

public interface EnterpriseRepository extends ContractorRepository<Enterprise, Long> {

    List<Enterprise> findAllEnterprises();

}
