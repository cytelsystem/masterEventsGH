package apiEvent.Repository;

import apiEvent.Model.Ticket;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TicketRepository extends MongoRepository<Ticket, Long> {
    List<Ticket> findByEventId(Long eventId);
    List<Ticket> deleteByEventId(Long eventId);
}
