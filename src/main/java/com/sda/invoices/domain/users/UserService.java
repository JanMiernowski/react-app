package com.sda.invoices.domain.users;

import com.sda.invoices.exception.AuthenticationException;
import com.sda.invoices.utils.JwtUtil;
import com.sda.invoices.web.dto.JwtTokenRequest;
import com.sda.invoices.web.dto.JwtTokenResponse;
import com.sda.invoices.web.security.JwtUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final JwtUserDetailsService jwtUserDetailsService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public JwtTokenResponse login(JwtTokenRequest request){
        UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(request.getUsername());
        if(userDetails==null){
            throw new AuthenticationException("User not found");
        }

        String password = userDetails.getPassword();
        if(!passwordEncoder.matches(request.getPassword(), password)){
            throw new AuthenticationException("Password does not match");
        }

        String username = userDetails.getUsername();
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(username, password));

        String token = jwtUtil.generateToken(username);

        return new JwtTokenResponse(username, token);
    }

}
