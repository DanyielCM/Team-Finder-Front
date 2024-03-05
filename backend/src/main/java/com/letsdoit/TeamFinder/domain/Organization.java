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


// This class is used to create a table in the database
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "organizations")
public class Organization implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "organization_organizationId_seq")
    @Column(name = "organization_id")
    private Integer organizationId;
    @Column(unique = true)
    private String userName;
    @Column(unique = true)
    private String email;
    private String password;
    private String organizationName;
    private String hqAddress;
    private String EmployeeRegisterURL;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="organization_roles_junction",
            joinColumns = @JoinColumn(name = "organization_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> authorities;

    public Organization(int orgId, String userName, String password, Set<Role> authorities)
    {
        this.organizationId = orgId;
        this.userName = userName;
        this.password = password;
        this.authorities = authorities;
    }

    public Organization(int orgId, String userName, String password, String email, String organizationName, String hqAddress, Set<Role> authorities)
    {
        this.organizationId = orgId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.organizationName = organizationName;
        this.hqAddress = hqAddress;
        this.authorities = authorities;
        this.EmployeeRegisterURL = "http://localhost:8080/employee/register?organizationUserName=" + userName;
    }



    public Organization(int organizationId)
    {
        this.organizationId = organizationId;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public String getPassword() {
        return this.password;
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
