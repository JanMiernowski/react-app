package com.sda.invoices.domain.contractor.naturalPerson;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class DatabaseNaturalPersonRepository implements NaturalPersonRepository{

    private final JpaNaturalPersonRepository jpaNaturalPersonRepository;

    public DatabaseNaturalPersonRepository(JpaNaturalPersonRepository jpaNaturalPersonRepository) {
        this.jpaNaturalPersonRepository = jpaNaturalPersonRepository;
    }

    @Override
    public NaturalPerson addToDatabase(NaturalPerson naturalPerson) {
        return jpaNaturalPersonRepository.save(naturalPerson);
    }

    @Override
    public void removeFromDatabase(Long id) {
        jpaNaturalPersonRepository.deleteById(id);
    }

    @Override
    public void update(NaturalPerson naturalPerson) {
        if(naturalPerson.getId()!=null){
            jpaNaturalPersonRepository.save(naturalPerson);
        }
    }

    @Override
    public Optional<NaturalPerson> findById(Long id) {
        return jpaNaturalPersonRepository.findById(id);
    }

    @Override
    public List<NaturalPerson> findAll() {
        return jpaNaturalPersonRepository.findAll();
    }
}
