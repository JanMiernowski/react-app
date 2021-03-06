package com.sda.invoices.domain.product;

import com.sda.invoices.web.dto.ProductSearchDto;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class ProductSpecifications {

    public static Specification<Product> customerSearch(ProductSearchDto dto) {


        return (Specification<Product>) (root, criteriaQuery, criteriaBuilder) -> {
            if (!StringUtils.hasLength(dto.getName())) {
                return criteriaBuilder.like(root.get("name"), dto.getName());
            }
            return null;
        };
    }
}
