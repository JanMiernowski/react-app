package com.sda.invoices.web.mapper;

import com.sda.invoices.domain.product.Product;
import com.sda.invoices.web.dto.ProductDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductMapper{

    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductDto toDto(Product entity);

    Product toEntity(ProductDto dto);

}
