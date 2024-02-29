package com.letsdoit.TeamFinder.Controllers;

import com.letsdoit.TeamFinder.domain.Department;
import com.letsdoit.TeamFinder.services.DepartamentServices;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@Log
@RestController
@RequestMapping("/api")
public class DepartamentController {

    private final DepartamentServices departamentServices;
    @Autowired
    public DepartamentController(DepartamentServices departamentServices) {
        this.departamentServices = departamentServices;
    }

    @PostMapping("/createDepartment")
    public ResponseEntity createDepartament(@RequestBody Department department) {
        try{
            departamentServices.createDepartament(department);
            return ResponseEntity.status(201).body("Resource created successfully");
        }
        catch (Exception e){
            log.info(e.getMessage());
            return ResponseEntity.status(500).body("Failed to create resource");
        }
    }

    @GetMapping("/getDepartment/{id}")
    public ResponseEntity getDepartament(@PathVariable("id") Integer id) {
        try{
            return ResponseEntity.status(200).body(departamentServices.getDepartament(id));
        }
        catch (Exception e){
            return ResponseEntity.status(404).body("Failed to get resource");
        }
    }

    @DeleteMapping("/deleteDepartament")
    public ResponseEntity deleteDepartament(Integer id) {
        try{
            departamentServices.deleteDepartament(id);
            return ResponseEntity.status(200).body("Resource deleted successfully");
        }
        catch (Exception e){
            return ResponseEntity.status(404).body("Failed to delete resource");
        }
    }





}
