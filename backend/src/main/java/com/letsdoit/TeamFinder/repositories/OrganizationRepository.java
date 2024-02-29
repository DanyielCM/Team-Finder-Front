package com.letsdoit.TeamFinder.repositories;

import com.letsdoit.TeamFinder.domain.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizationRepository  extends JpaRepository<Organization, Integer> {
        Organization findByUserName(String userName);
        Organization findByEmail(String email);
        Organization findByOrganizationName(String organizationName);
        Organization findByhqAddress(String HQAddress);
    }
