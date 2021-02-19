package com.sda.invoices.domain.contractor.enterprise;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class DatabaseEnterpriseRepository implements EnterpriseRepository {

    private final JpaEnterpriseRepository jpaEnterpriseRepository;

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
    public List<Enterprise> findAllEnterprises() {
        return jpaEnterpriseRepository.findAll();
    }
}
