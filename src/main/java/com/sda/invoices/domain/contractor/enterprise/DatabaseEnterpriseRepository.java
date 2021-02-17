package com.sda.invoices.domain.contractor.enterprise;

import com.sda.invoices.domain.contractor.DatabaseContractorRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public class DatabaseEnterpriseRepository extends DatabaseContractorRepository<Enterprise, Long> {

    public DatabaseEnterpriseRepository(JpaRepository<Enterprise, Long> jpaRepository) {
        super(jpaRepository);
    }
}
