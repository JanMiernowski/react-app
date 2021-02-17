package com.sda.invoices.web.mapper;

import com.sda.invoices.domain.contractor.naturalPerson.NaturalPerson;
import com.sda.invoices.web.dto.NaturalPersonDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface NaturalPersonMapper {

    NaturalPersonMapper INSTANCE = Mappers.getMapper(NaturalPersonMapper.class);

    NaturalPersonDto toDto(NaturalPerson entity);

    NaturalPerson toEntity(NaturalPersonDto dto);

}
