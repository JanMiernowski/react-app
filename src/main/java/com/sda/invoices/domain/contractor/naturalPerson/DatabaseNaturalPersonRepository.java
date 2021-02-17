package com.sda.invoices.domain.contractor.naturalPerson;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class DatabaseNaturalPersonRepository implements NaturalPersonRepository{

    private final JpaNaturalPersonRepository jpaNaturalPersonRepository;

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
}
