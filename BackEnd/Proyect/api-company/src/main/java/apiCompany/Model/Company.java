package apiCompany.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Company {
    @Id
    private Long id;
    private String nameCompany;
    private String email;
    private Integer cuitNit;
    private String FirstName;
    private String LastName;
    private String password;
    private Integer phoneNumber;

}
