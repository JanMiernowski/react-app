package com.sda.invoices.config;

import com.sda.invoices.web.filter.CorsFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

@Configuration
public class SecurityWebConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().disable()
                .addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class)
                .authorizeRequests().anyRequest().permitAll()
                .and()
                .httpBasic();
    }


}
