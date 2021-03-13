package com.sda.invoices.web.filter;

import com.sda.invoices.utils.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@AllArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserDetailsService jwtUserDetailsService;

    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String authorization = httpServletRequest.getHeader("Authorization");

        System.out.println("Filter Authorization Header: " + authorization);

        if (StringUtils.hasLength(authorization) && authorization.startsWith("Bearer ")) {
            String token = authorization.substring(7);

            // if token is expired, please log in again
            if (jwtUtil.isExpired(token)) {
                httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
                return;
            }
            final String username = jwtUtil.getUsername(token);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                httpServletResponse.addHeader("Authorization", "Bearer " + token);

                // if token is correct, log in user into SecurityContext
                UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }

        }
        System.out.println("Authentication: " + SecurityContextHolder.getContext().getAuthentication());
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getServletPath();

        return path.startsWith("/authenticate");
    }
}
