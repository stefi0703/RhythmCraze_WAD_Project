
package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.services.ConcertService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final ConcertService concertService;

    public AdminController(ConcertService concertService) {
        this.concertService = concertService;
    }

    @GetMapping
    public String showAddConcertForm(Model model) {
        model.addAttribute("concert", new Concert());
        return "admin";
    }
}
