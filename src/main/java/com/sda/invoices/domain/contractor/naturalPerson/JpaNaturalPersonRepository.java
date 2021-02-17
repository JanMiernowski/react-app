package com.sda.invoices.domain.contractor.naturalPerson;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaNaturalPersonRepository extends JpaRepository<NaturalPerson, Long> {
}
