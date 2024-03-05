package com.letsdoit.TeamFinder;

import com.letsdoit.TeamFinder.Enums.Roles;
import com.letsdoit.TeamFinder.domain.Organization;
import com.letsdoit.TeamFinder.domain.Role;
import com.letsdoit.TeamFinder.repositories.OrganizationRepository;
import com.letsdoit.TeamFinder.repositories.RoleRepository;
import lombok.extern.java.Log;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.oauth2.login.OAuth2LoginSecurityMarker;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
@Log
public class TeamFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamFinderApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, OrganizationRepository organizationRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if (roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role(Roles.OrganizationAdmin.toString()));
			roleRepository.save(new Role(Roles.Employee.toString()));
			roleRepository.save(new Role(Roles.DepartmentManager.toString()));
			roleRepository.save(new Role(Roles.ProjectManager.toString()));



			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			Organization admin = new Organization(1, "admin", passwordEncoder.encode("admin"), roles);
			organizationRepository.save(admin);
		};

	}
}