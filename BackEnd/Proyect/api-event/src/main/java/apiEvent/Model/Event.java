package apiEvent.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Event {
    @Id
    private Long id;
    private String nameEvent;
    private String description;
    private String image;
    private String location;
    private String city;
    private Date date;
    private String category;
    private Integer minimumAge;
    private String address;
    private Time openTime;
}
