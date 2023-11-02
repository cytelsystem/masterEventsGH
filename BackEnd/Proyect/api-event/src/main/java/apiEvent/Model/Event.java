package apiEvent.Model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameEvent;
    private String description;
    private String location;
    private String city;
    private Date date;
    private String category;
    private Integer minimumAge;
    private String address;
    private Time openTime;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;

    @Override
    public String toString(){
        return "Event{" +
                "name=" + nameEvent + '\'' +
                "description=" + description + '\'' +
                "location=" + location + '\'' +
                "city=" + city + '\'' +
                "date=" + date + '\'' +
                "category=" + category + '\'' +
                "minimumAge=" + minimumAge + '\'' +
                "address=" + address + '\'' +
                "openTime=" + openTime + '\'' +
                '}';
    }
}
