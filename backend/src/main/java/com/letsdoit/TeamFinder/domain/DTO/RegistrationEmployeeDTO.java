package com.letsdoit.TeamFinder.domain.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationEmployeeDTO {
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

}
