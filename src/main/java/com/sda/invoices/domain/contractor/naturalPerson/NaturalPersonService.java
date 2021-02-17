package com.sda.invoices.domain.contractor.naturalPerson;

import com.sda.invoices.web.dto.NaturalPersonDto;
import com.sda.invoices.web.mapper.NaturalPersonMapper;
import org.springframework.stereotype.Service;

@Service
public class NaturalPersonService {

    private final DatabaseNaturalPersonRepository databaseContractorRepository;
    private final NaturalPersonMapper naturalPersonMapper;

    public NaturalPersonService(DatabaseNaturalPersonRepository databaseContractorRepository,
                                NaturalPersonMapper naturalPersonMapper) {
        this.databaseContractorRepository = databaseContractorRepository;
        this.naturalPersonMapper = naturalPersonMapper;
    }

    public void addNaturalPerson(NaturalPersonDto dto){
        databaseContractorRepository.addToDatabase(naturalPersonMapper.toEntity(dto));
    }

    public void deleteNaturalPersonById(Long id){
        databaseContractorRepository.removeFromDatabase(id);
    }

    public NaturalPersonDto findNaturalPersonById(Long id){
        NaturalPerson entity = databaseContractorRepository.findById(id).orElseThrow(() -> new RuntimeException("Nie znaleziono przedsiębiorstwa o id " + id));
        return naturalPersonMapper.toDto(entity);
    }

    public void updateNaturalPerson(NaturalPersonDto dto){
        databaseContractorRepository.update(naturalPersonMapper.toEntity(dto));
    }
}
