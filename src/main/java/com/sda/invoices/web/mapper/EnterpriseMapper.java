package com.sda.invoices.web.mapper;

import com.sda.invoices.domain.contractor.enterprise.Enterprise;
import com.sda.invoices.web.dto.EnterpriseDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EnterpriseMapper {

    EnterpriseMapper INSTANCE = Mappers.getMapper(EnterpriseMapper.class);

    EnterpriseDto toDto(Enterprise entity);

    Enterprise toEntity(EnterpriseDto dto);

}
