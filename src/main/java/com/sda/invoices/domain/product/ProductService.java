package com.sda.invoices.domain.product;

import com.sda.invoices.web.dto.ProductSearchDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    public Product findById(Long id) {
        return productRepository.getOne(id);
    }

    public List<Product> search(ProductSearchDto dto) {
        return productRepository.findAll(ProductSpecifications.customerSearch(dto));
    }
}
