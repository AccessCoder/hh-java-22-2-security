package com.example.backend.model;


import lombok.Data;

@Data
public class CreateUserDto {

    private String username;
    private String password;
}
