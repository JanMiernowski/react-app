package com.sda.invoices.web.mapper;

import com.sda.invoices.domain.contractor.Address;
import com.sda.invoices.web.dto.AddressDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AddressMapper {

    AddressMapper INSTANCE = Mappers.getMapper(AddressMapper.class);

    Address toEntity(AddressDto dto);

    AddressDto toDto(Address address);

}
