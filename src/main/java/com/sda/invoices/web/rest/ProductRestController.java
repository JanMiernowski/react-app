package com.sda.invoices.web.rest;

import com.sda.invoices.domain.product.Product;
import com.sda.invoices.domain.product.ProductService;
import com.sda.invoices.web.dto.ProductDto;
import com.sda.invoices.web.mapper.ProductMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductRestController {

    private final ProductService productService;
    private final ProductMapper productMapper = ProductMapper.INSTANCE;


    @PostMapping
    public ResponseEntity<ProductDto> create(@RequestBody ProductDto dto) {
        return save(dto);
    }

    @PutMapping
    public ResponseEntity<ProductDto> update(@RequestBody ProductDto dto) {
        return save(dto);
    }

    @GetMapping
    public ResponseEntity<List<ProductDto>> list(){
        return ResponseEntity.ok(productService.findAll().stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList()));
    }

    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        productService.deleteById(id);
    }

    private ResponseEntity<ProductDto> save(ProductDto dto) {
        Product entity = productMapper.toEntity(dto);
        ProductDto savedDto = productMapper.toDto(productService.save(entity));
        return ResponseEntity.ok(savedDto);
    }

}
