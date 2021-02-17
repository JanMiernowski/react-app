package com.sda.invoices.domain.contractor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public abstract class DatabaseContractorRepository<ENTITY extends Contractor, ID extends Number> implements ContractorRepository<ENTITY, ID> {

    private final JpaRepository<ENTITY, ID> jpaRepository;

    public DatabaseContractorRepository(JpaRepository<ENTITY, ID> jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public void addToDatabase(ENTITY entity) {
        jpaRepository.save(entity);
    }

    @Override
    public void removeFromDatabase(ID id) {
        jpaRepository.deleteById(id);
    }

    @Override
    public void update(ENTITY entity) {
        jpaRepository.save(entity);
    }

    @Override
    public Optional<ENTITY> findById(ID id) {
        return jpaRepository.findById(id);
    }
}
