package com.sda.invoices.web.rest;

import com.sda.invoices.domain.contractor.enterprise.EnterpriseService;
import com.sda.invoices.domain.contractor.naturalPerson.NaturalPersonService;
import com.sda.invoices.web.dto.EnterpriseDto;
import com.sda.invoices.web.dto.NaturalPersonDto;
import com.sda.invoices.web.mapper.NaturalPersonMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/contractor")
public class ContractorRestController {

    private final EnterpriseService enterpriseService;
    private final NaturalPersonService naturalPersonService;
    private final NaturalPersonMapper naturalPersonMapper = NaturalPersonMapper.INSTANCE;

    public ContractorRestController(EnterpriseService enterpriseService, NaturalPersonService naturalPersonService) {
        this.enterpriseService = enterpriseService;
        this.naturalPersonService = naturalPersonService;
    }


    @PostMapping("/addEnterprise")
    public ResponseEntity<EnterpriseDto> addEnterprise(@RequestBody EnterpriseDto dto) {
        EnterpriseDto savedDto = enterpriseService.addEnterprise(dto);
        return ResponseEntity.ok(savedDto);
    }

    @PostMapping("/addNaturalPerson")
    public ResponseEntity<NaturalPersonDto> addNaturalPerson(@RequestBody NaturalPersonDto dto) {
        NaturalPersonDto savedDto = naturalPersonService.addNaturalPerson(dto);
        return ResponseEntity.ok(savedDto);
    }


    @GetMapping("/showAllEnterprises")
    public List<EnterpriseDto> showAllEnterprises(){
        return enterpriseService.findAllEnterprises();
    }

    @GetMapping("/showAllNaturalPersons")
    public ResponseEntity<List<NaturalPersonDto>> showAllNaturalPersons(){
        return ResponseEntity.ok(naturalPersonService.findAllNaturalPersons().stream()
        .map(entity -> naturalPersonMapper.toDto(entity)).collect(Collectors.toList()));
    }

    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping("/deleteNaturalPerson/{id}")
    public void deleteNaturalPersonById(@PathVariable("id") Long id){
        naturalPersonService.deleteNaturalPersonById(id);
    }

    @GetMapping("/getNaturalPersonById/{id}")
    public ResponseEntity<NaturalPersonDto> getNaturalPersonById(@PathVariable("id") Long id){
        return ResponseEntity.ok(naturalPersonService.findNaturalPersonById(id));
    }
}
