package apiuser.MasterEvents.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    private Long id;
    private String role;
    private String name;
    private String lastName;
    private Date birthDate;
    private Integer DNI;
    private String email;
    private String address;
    private String country;
    private Integer phoneNumber;
    private String city;
    private String state;
    private String password;

}
