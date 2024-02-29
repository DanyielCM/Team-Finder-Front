package com.letsdoit.TeamFinder.Controllers;

import com.letsdoit.TeamFinder.domain.Organization;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.letsdoit.TeamFinder.services.OrganizationService;

@Log
@RestController
@RequestMapping("/api")
public class OrganizationController {

    private final OrganizationService organizationService;

    @Autowired
    public OrganizationController(OrganizationService organizationService) {
        this.organizationService = organizationService;
    }

    @PostMapping("/createOrganization")
    public ResponseEntity createOrganization(@RequestBody Organization organization) {
        try{
        organizationService.createOrganization(organization);
            return ResponseEntity.status(HttpStatus.CREATED).body("Resource created successfully");
        }
        catch (Exception e){
            log.info(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create resource");
        }
    }

    @GetMapping("/getOrganization/{organizationId}")
    public ResponseEntity getOrganization(@PathVariable("organizationId") Integer id) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(organizationService.getOrganization(id));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Failed to get resource");
        }
    }

    @DeleteMapping("/deleteOrganization/{id}")
    public ResponseEntity deleteOrganization(@PathVariable("id") Integer id) {
        try{
            organizationService.deleteOrganization(id);
            return ResponseEntity.status(HttpStatus.OK).body("Resource deleted successfully");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Failed to delete resource");
        }
    }


}
