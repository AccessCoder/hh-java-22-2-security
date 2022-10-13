package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.model.CreateUserDto;
import com.example.backend.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private AppUserRepository userRepo;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(AppUserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }


    public String register(CreateUserDto createUserDto) {

        // Hash password (with BCrypt)
        String hashedPassword = passwordEncoder.encode(createUserDto.getPassword());

        // Create AppUser
        AppUser appUser = new AppUser();
        appUser.setUsername(createUserDto.getUsername());
        appUser.setPasswordHash(hashedPassword);
        appUser.setRoles(List.of("USER"));

        // Save AppUser in DB
        return userRepo.save(appUser).getUsername();

    }
}
