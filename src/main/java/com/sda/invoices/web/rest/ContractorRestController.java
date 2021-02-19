package com.sda.invoices.web.rest;

import com.sda.invoices.domain.contractor.enterprise.EnterpriseService;
import com.sda.invoices.domain.contractor.naturalPerson.NaturalPersonService;
import com.sda.invoices.web.dto.EnterpriseDto;
import com.sda.invoices.web.dto.NaturalPersonDto;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contractor")
@AllArgsConstructor
public class ContractorRestController {

    private final EnterpriseService enterpriseService;
    private final NaturalPersonService naturalPersonService;

    @CrossOrigin(origins = "*")
    @PostMapping
    @RequestMapping("/addEnterprise")
    public ResponseEntity<EnterpriseDto> addEnterprise(@RequestBody EnterpriseDto dto) {
        EnterpriseDto savedDto = enterpriseService.addEnterprise(dto);
        return ResponseEntity.ok(savedDto);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    @RequestMapping("/addNaturalPerson")
    public ResponseEntity<NaturalPersonDto> addNaturalPerson(@RequestBody NaturalPersonDto dto) {
        NaturalPersonDto savedDto = naturalPersonService.addNaturalPerson(dto);
        return ResponseEntity.ok(savedDto);
    }

}
