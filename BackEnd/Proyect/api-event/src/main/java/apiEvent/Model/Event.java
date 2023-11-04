package apiEvent.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@Entity
@Document(collection = "Events")
public class Event {
    @Id
    private Long id;
    private String nameEvent;
    private String description;
    private String location;
    private String city;
    private Date date;
    private String category;
    private Integer minimumAge;
    private String address;
    private LocalTime openTime;
    private List<Image> images;
    private List<Ticket> tickets;

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
    public void setImages(List<Image> images) {
        this.images = images;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
