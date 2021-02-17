package com.sda.invoices.domain.contractor.enterprise;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaEnterpriseRepository extends JpaRepository<Enterprise, Long> {
}
