package com.sda.invoices.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String secret;
    private static final long EXPIRATION_IN_MILLIS = 1 * 60 * 1000;

    public JwtUtil(@Value("${jwt.token.secret}") String secret) {
        this.secret = secret;
    }

    public String getUsername(String token){
        return getClaims(token).getSubject();
    }

    public boolean isExpired(String token){
        return getClaims(token).getExpiration().before(new Date());
    }

    public String generateToken(String username){
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_IN_MILLIS))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .signWith(SignatureAlgorithm.HS512, this.secret)
                .compact();
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
                .setSigningKey(this.secret)
                .parseClaimsJws(token)
                .getBody();
    }
}
