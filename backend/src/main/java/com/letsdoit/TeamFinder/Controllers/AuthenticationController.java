package com.letsdoit.TeamFinder.Controllers;

import com.letsdoit.TeamFinder.domain.DTO.*;
import com.letsdoit.TeamFinder.domain.Employees;
import com.letsdoit.TeamFinder.domain.Organization;
import com.letsdoit.TeamFinder.repositories.OrganizationRepository;
import com.letsdoit.TeamFinder.services.AuthenticationService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

@RestController
@Log
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;



    //TODO: adauga restul de campuri din Organization
    @PostMapping("/register")
    public Organization registerOrganization(@RequestBody RegistrationDTO registrationDTO)
    {
        try{
            return authenticationService.registerOrganization(registrationDTO.getUserName().toLowerCase(),  registrationDTO.getEmail().toLowerCase(), registrationDTO.getPassword(),registrationDTO.getOrganizationName(), registrationDTO.getHqAddress());
        }
        catch (DataIntegrityViolationException e)
        {
            log.info("User " + registrationDTO.getUserName() + " already exists");
            return null;
        }
    }

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginDTO loginDTO)  {

        return authenticationService.login(loginDTO.getUserName().toLowerCase(), loginDTO.getPassword());
    }

    @PostMapping("/employee/login")
    public EmployeeLoginResponseDTO loginEmployee(@RequestBody LoginEmployeeDTO loginDTO)  {

        return authenticationService.loginEmployee(loginDTO.getEmployeeUserName().toLowerCase(), loginDTO.getEmployeePassword());
    }

    @PostMapping("/employee/register")
    public Employees registerEmployee(@RequestParam String organizationUserName, @RequestBody RegistrationEmployeeDTO registerEmployeeDTO)
    {
        try{
            return authenticationService.registerEmployee(registerEmployeeDTO.getUserName().toLowerCase(),  registerEmployeeDTO.getEmail().toLowerCase(), registerEmployeeDTO.getPassword(), registerEmployeeDTO.getFirstName(), registerEmployeeDTO.getLastName(), organizationUserName);
        }
        catch (DataIntegrityViolationException e)
        {
            log.info("User " + registerEmployeeDTO.getUserName() + " already exists");
            return null;
        }
    }

}
