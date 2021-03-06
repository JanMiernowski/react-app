package com.sda.invoices.web.rest;

import com.sda.invoices.domain.product.Product;
import com.sda.invoices.domain.product.ProductService;
import com.sda.invoices.web.dto.ProductDto;
import com.sda.invoices.web.mapper.ProductMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductRestController {

    private final ProductService productService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<ProductDto> create(@RequestBody ProductDto dto) {
        Product entity = ProductMapper.INSTANCE.toEntity(dto);

        ProductDto savedDto = ProductMapper.INSTANCE.toDto(productService.save(entity));
        return ResponseEntity.ok(savedDto);
    }

}
