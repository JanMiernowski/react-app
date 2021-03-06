package com.sda.invoices.domain.contractor.naturalPerson;

import com.sda.invoices.web.dto.NaturalPersonDto;
import com.sda.invoices.web.mapper.NaturalPersonMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NaturalPersonService {

    private final DatabaseNaturalPersonRepository databaseContractorRepository;
    private final NaturalPersonMapper naturalPersonMapper = NaturalPersonMapper.INSTANCE;

    public NaturalPersonService(DatabaseNaturalPersonRepository databaseContractorRepository) {
        this.databaseContractorRepository = databaseContractorRepository;

    }

    public NaturalPersonDto addNaturalPerson(NaturalPersonDto dto){
        NaturalPerson entity = databaseContractorRepository.addToDatabase(naturalPersonMapper.toEntity(dto));
        return naturalPersonMapper.toDto(entity);
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

    public List<NaturalPerson> findAllNaturalPersons() {
        return databaseContractorRepository.findAll();
    }
}
