package com.sda.invoices.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtTokenRequest {

    private String username;
    private String password;

}
