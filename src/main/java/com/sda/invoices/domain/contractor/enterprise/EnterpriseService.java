package com.sda.invoices.domain.contractor.enterprise;

import com.sda.invoices.web.dto.EnterpriseDto;
import com.sda.invoices.web.mapper.EnterpriseMapper;
import org.springframework.stereotype.Service;

@Service
public class EnterpriseService {

    private final DatabaseEnterpriseRepository databaseEnterpriseRepository;
    private final EnterpriseMapper enterpriseMapper = EnterpriseMapper.INSTANCE;

    public EnterpriseService(DatabaseEnterpriseRepository databaseEnterpriseRepository){
        this.databaseEnterpriseRepository = databaseEnterpriseRepository;

    }

    public EnterpriseDto addEnterprise(EnterpriseDto enterpriseDto){
        Enterprise entity = databaseEnterpriseRepository.addToDatabase(enterpriseMapper.toEntity(enterpriseDto));
        return enterpriseMapper.toDto(entity);
    }

    public void deleteEnterpriseById(Long id){
        databaseEnterpriseRepository.removeFromDatabase(id);
    }

    public EnterpriseDto findEnterpriseById(Long id){
        Enterprise entity = databaseEnterpriseRepository.findById(id).orElseThrow(() -> new RuntimeException("Nie znaleziono przedsiębiorstwa o id " + id));
        return enterpriseMapper.toDto(entity);
    }

    public void updateEnterprise(EnterpriseDto dto){
        databaseEnterpriseRepository.update(enterpriseMapper.toEntity(dto));
    }

}
