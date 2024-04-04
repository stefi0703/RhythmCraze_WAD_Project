package org.example.backend.controllers;

import org.example.backend.domain.Concert;
import org.example.backend.services.ConcertService;
import org.example.backend.domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@Slf4j
@RequestMapping("/concerts")
public class ConcertController {
    private final ConcertService concertService;

    public ConcertController(ConcertService concertService) {
        this.concertService = concertService;
    }

    @GetMapping
    @ResponseBody
    public List<Concert> seeConcerts() {

        return concertService.findAll();
       // model.addAttribute("concerts", concertService.findAll());
        //User user = (User) authentication.getPrincipal();
        //log.info(user.getUsername());
       // return "concerts";
    }

    @PostMapping
    public String addConcert(Concert concert) {
        concertService.save(concert);
        return "redirect:/concerts";
    }
}
