package com.sda.invoices.web.filter;

import com.sda.invoices.utils.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;


    public JwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }


    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String authorization = httpServletRequest.getHeader("Authorization");

        if (StringUtils.hasLength(authorization) && authorization.startsWith("Bearer ")) {
            String token = authorization.substring(7);

            final String username = jwtUtil.getUsername(token);
            if(username==null){
                httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
                return;
            }
            if (jwtUtil.isExpired(token)) {
                token = jwtUtil.generateToken(username);
            }
            httpServletResponse.addHeader("Authorization", "Bearer " + token);
        }else{
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            return;
        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
