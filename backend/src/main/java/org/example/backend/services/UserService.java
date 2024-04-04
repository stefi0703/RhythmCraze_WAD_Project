package org.example.backend.services;

import org.example.backend.domain.User;

public interface UserService {
    void save(User user);
    User findByUsername(String username);
}
