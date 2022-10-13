package com.example.backend.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api/user")
public class UserController {


    @GetMapping("/login")
    public String login(){

        // Ask Security Context for User information
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){

        session.invalidate();
    }

}
