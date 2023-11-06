package apiuser.MasterEvents.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
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
