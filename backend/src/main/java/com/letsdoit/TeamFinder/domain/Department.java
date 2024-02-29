package com.letsdoit.TeamFinder.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "departaments")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "departament_id_seq")
    private Long departmentId;
    private String departmentName;
    private String description;
    private String manager;
    @JoinColumn(name = "organization_id")
    @ManyToOne
    private Organization organizationId;

}
