package com.sda.invoices.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtTokenResponse {

    private String username;
    private String token;

}
