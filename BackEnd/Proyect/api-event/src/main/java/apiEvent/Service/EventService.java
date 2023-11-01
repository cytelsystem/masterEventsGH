package apiEvent.Service;

import apiEvent.Exception.BadRequestException;
import apiEvent.Model.Event;
import apiEvent.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    public Event SaveEvent(Event e){
       return eventRepository.save(e);
    }

    public List<Event> ListAllEvents(){
        return eventRepository.findAll();
    }

    public Event FindEventByID(Long id){
        return eventRepository.findById(id).get();
    }

    public void DeleteByID(Long id){
        eventRepository.deleteById(id);
    }

    public Event EditEvent(Event event) throws BadRequestException {
        Optional<Event> eventSearched = Optional.ofNullable(FindEventByID(event.getId()));
        if (eventSearched.isPresent()){
            return eventRepository.save(event);
        } else {
            throw new BadRequestException("The event doesn't exist");
        }
    }
}
