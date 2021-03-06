package com.sda.invoices.domain.contractor.enterprise;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class DatabaseEnterpriseRepository implements EnterpriseRepository {

    private final JpaEnterpriseRepository jpaEnterpriseRepository;

    public DatabaseEnterpriseRepository(JpaEnterpriseRepository jpaEnterpriseRepository) {
        this.jpaEnterpriseRepository = jpaEnterpriseRepository;
    }

    @Override
    public Enterprise addToDatabase(Enterprise enterprise) {
        return jpaEnterpriseRepository.save(enterprise);
    }

    @Override
    public void removeFromDatabase(Long id) {
        jpaEnterpriseRepository.deleteById(id);
    }

    @Override
    public void update(Enterprise enterprise) {
        if(enterprise.getId()!=null){
            jpaEnterpriseRepository.save(enterprise);
        }
    }

    @Override
    public Optional<Enterprise> findById(Long id) {
        return jpaEnterpriseRepository.findById(id);
    }

    @Override
    public List<Enterprise> findAll() {
        return jpaEnterpriseRepository.findAll();
    }

    @Override
    public List<Enterprise> findAllEnterprises() {
        return jpaEnterpriseRepository.findAll();
    }
}
