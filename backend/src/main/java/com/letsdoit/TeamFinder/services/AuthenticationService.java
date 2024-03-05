package com.letsdoit.TeamFinder.services;


import com.letsdoit.TeamFinder.domain.DTO.EmployeeLoginResponseDTO;
import com.letsdoit.TeamFinder.domain.DTO.LoginResponseDTO;
import com.letsdoit.TeamFinder.domain.Employees;
import com.letsdoit.TeamFinder.domain.Organization;
import com.letsdoit.TeamFinder.domain.Role;
import com.letsdoit.TeamFinder.repositories.EmployeeRepository;
import com.letsdoit.TeamFinder.repositories.OrganizationRepository;
import com.letsdoit.TeamFinder.repositories.RoleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
@Log
@Transactional
public class AuthenticationService {
    @Autowired
    private OrganizationRepository organizationRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;


    public Organization registerOrganization(String username, String email, String password, String organizationName, String hqAddress)
    {
            String encodedPassword = passwordEncoder.encode(password);
            Role organizationRole = roleRepository.findByAuthority("OrganizationAdmin").get();
            Set<Role> authorities = new HashSet<>();
            authorities.add(organizationRole);
            return organizationRepository.save(new Organization(0, username, encodedPassword, email, organizationName, hqAddress, authorities));
    }

    public Employees registerEmployee(String username, String email, String password, String firstName, String lastName, String organizationName)
    {

        String encodedPassword = passwordEncoder.encode(password);
        Role employeeRole = roleRepository.findByAuthority("Employee").get();
        Set<Role> authorities = new HashSet<>();
        authorities.add(employeeRole);
        Organization organization = organizationRepository.findByuserName(organizationName).orElseThrow(() -> new EntityNotFoundException("Organization not found"));
        Employees employee = new Employees(username, encodedPassword, email, firstName, lastName, organizationRepository.findByuserName(organizationName).get().getOrganizationId(), authorities);
        employee.setOrganization(organization);
        return employeeRepository.save(employee);
    }

    public EmployeeLoginResponseDTO loginEmployee(String username, String password) {
        try {

            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
            String token = tokenService.generateJwt(auth);
            return new EmployeeLoginResponseDTO(employeeRepository.findByEmployeeUserName(username).orElseThrow(()->
                    new EntityNotFoundException("User not Found")), token);

        }
        catch (AuthenticationException e)
        {
            log.info(e.getMessage());
            return new EmployeeLoginResponseDTO(null,"");
        }
    }

    public LoginResponseDTO login(String username, String password) {
        try {

            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
            String token = tokenService.generateJwt(auth);
            return new LoginResponseDTO(organizationRepository.findByuserName(username).get(), token);

        }
        catch (AuthenticationException e)
        {
            return new LoginResponseDTO(null,"");
        }
    }

}

