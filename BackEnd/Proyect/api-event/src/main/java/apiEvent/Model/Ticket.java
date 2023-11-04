package apiEvent.Model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@Entity
@Document(collection = "Tickets")
public class Ticket {
    @Id
    private Long id;
    private String type;
    private Double price;
    private Integer quantity;
    private Long eventId;

    @Override
    public String toString(){
        return "Ticket{" +
                "type=" + type + '\'' +
                "price=" + price + '\'' +
                "quantity=" + quantity + '\'' +
                '}';
    }
}
