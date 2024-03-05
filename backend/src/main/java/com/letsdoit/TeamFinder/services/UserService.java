package com.letsdoit.TeamFinder.services;

import com.letsdoit.TeamFinder.repositories.EmployeeRepository;
import com.letsdoit.TeamFinder.repositories.OrganizationRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Log
public class UserService implements UserDetailsService{

    @Autowired
    private OrganizationRepository organizationRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Username: "+username);
        UserDetails user=null;
        try {
            user = employeeRepository.findByEmployeeUserName(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        } catch (UsernameNotFoundException e) {
        }

        try {
            user = organizationRepository.findByuserName(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        } catch (UsernameNotFoundException e) {
        }
        return  user;

    }
}
