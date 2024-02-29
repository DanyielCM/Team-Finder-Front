package com.letsdoit.TeamFinder.services;

import com.letsdoit.TeamFinder.domain.Department;
import com.letsdoit.TeamFinder.repositories.DepartamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartamentServices {
    private final DepartamentRepository departamentRepository;
    @Autowired
    public DepartamentServices(DepartamentRepository departamentRepository) {
        this.departamentRepository = departamentRepository;
    }

    public Department createDepartament(Department department) {
        return departamentRepository.save(department);
    }

    public Department getDepartament(Integer id) {
        return departamentRepository.findById(id).orElse(null);
    }

    public void deleteDepartament(Integer id) {
        departamentRepository.deleteById(id);
    }
}
