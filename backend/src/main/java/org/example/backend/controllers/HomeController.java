package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.services.ConcertService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping
    public String home() {
        return "home";
    }
}
