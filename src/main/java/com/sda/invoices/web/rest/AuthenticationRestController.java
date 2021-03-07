package com.sda.invoices.web.rest;

import com.sda.invoices.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationRestController {

    private final JwtUtil jwtUtil;

    @Autowired
    public AuthenticationRestController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
}
