package com.sda.invoices.domain.users;


import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsernameAndActiveTrue(String username);

    User findByUsername(String username);
}
