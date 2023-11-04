package apiEvent.Repository;

import apiEvent.Model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface EventRepository extends MongoRepository<Event, Long> {
    List<Event> findByCategory(String category);
    List<Event> findByLocation(String location);
    List<Event> findByDate(Date date);
}
