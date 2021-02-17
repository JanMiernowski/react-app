package com.sda.invoices.domain.contractor.naturalPerson;

import com.sda.invoices.domain.contractor.DatabaseContractorRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public class DatabaseNaturalPersonRepository extends DatabaseContractorRepository<NaturalPerson, Long>{

    public DatabaseNaturalPersonRepository(JpaRepository<NaturalPerson, Long> jpaRepository) {
        super(jpaRepository);
    }

}
