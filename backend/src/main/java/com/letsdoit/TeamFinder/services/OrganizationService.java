package com.letsdoit.TeamFinder.services;
import com.letsdoit.TeamFinder.domain.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.letsdoit.TeamFinder.repositories.OrganizationRepository;

@Service
public class OrganizationService {

    private final OrganizationRepository organizationRepository;

    @Autowired
    public OrganizationService(OrganizationRepository organizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    public Organization createOrganization(Organization organization) {
        return organizationRepository.save(organization);
    }

    public Organization getOrganization(Integer id) {
        return organizationRepository.findById(id).orElse(null);
    }

    public void deleteOrganization(Integer id) {
        organizationRepository.deleteById(id);
    }
}
