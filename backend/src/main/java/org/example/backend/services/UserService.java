package org.example.backend.services;

import org.example.backend.domain.User;

public interface UserService {
    User save(User user);
    User findByUsername(String username);
}
