package com.sda.invoices.domain.product;

import com.sda.invoices.web.dto.ProductSearchDto;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecifications {

    public static Specification<Product> customerSearch(ProductSearchDto dto) {


        return (Specification<Product>) (root, criteriaQuery, criteriaBuilder) -> {
            if (!dto.getName().isBlank()) {
                return criteriaBuilder.like(root.get("name"), dto.getName());
            }
            return null;
        };
    }

}
