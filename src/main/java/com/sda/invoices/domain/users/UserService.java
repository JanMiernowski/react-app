package com.sda.invoices.domain.users;

import com.sda.invoices.utils.JwtUtil;
import com.sda.invoices.web.dto.JwtTokenRequest;
import com.sda.invoices.web.dto.JwtTokenResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public JwtTokenResponse login(JwtTokenRequest request){
        final String username = request.getUsername();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, request.getPassword()));
        final String token = jwtUtil.generateToken(username);

        return new JwtTokenResponse(username, token);
    }
}
