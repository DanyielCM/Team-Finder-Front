package com.letsdoit.TeamFinder.domain.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegistrationDTO {
    private String userName;
    private String email;
    private String password;
    private String organizationName;
    private String hqAddress;

}
