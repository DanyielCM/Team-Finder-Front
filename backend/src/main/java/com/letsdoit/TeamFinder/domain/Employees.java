package com.letsdoit.TeamFinder.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;

@Data
@Table(name = "employees")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Employees implements UserDetails {
    @Column(name = "employee_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Integer employeeId;
    private String employeeUserName;
    private String employeeFirstName;
    private String employeeLastName;
    private String employeeEmail;
    private String employeePassword;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "organization_id")
    private Organization organization;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="emplyees_roles_junction",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> authorities;

    public Employees(String employeeUserName, String employeePassword, String employeeEmail, String employeeFirstName, String employeeLastName, Integer orgId, Set<Role> authorities) {
        this.employeeUserName = employeeUserName;
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.employeeEmail = employeeEmail;
        this.employeePassword = employeePassword;
        this.organization = new Organization();
        organization.setOrganizationId(orgId);
        this.authorities = authorities;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.employeePassword;
    }

    @Override
    public String getUsername() {
        return this.employeeUserName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
