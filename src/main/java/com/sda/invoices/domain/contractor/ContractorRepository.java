package com.sda.invoices.domain.contractor;

import java.util.List;
import java.util.Optional;

public interface ContractorRepository<ENTITY extends Contractor, ID> {

    ENTITY addToDatabase(ENTITY entity);
    void removeFromDatabase(ID id);
    void update(ENTITY entity);
    Optional<ENTITY> findById(ID id);
    List<ENTITY> findAll();

}
