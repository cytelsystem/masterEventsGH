package apiEvent.Service;

import apiEvent.Exception.BadRequestException;
import apiEvent.Exception.ResourceNotFoundException;
import apiEvent.Model.Event;
import apiEvent.Model.Image;
import apiEvent.Model.Ticket;
import apiEvent.Repository.EventRepository;
import apiEvent.Repository.ImageRepository;
import apiEvent.Repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;

@Service
public class EventService {


    private EventRepository eventRepository;
    private ImageRepository imageRepository;
    private TicketRepository ticketRepository;

    @Autowired
    public EventService(EventRepository eventRepository, ImageRepository imageRepository, TicketRepository ticketRepository){
        this.eventRepository = eventRepository;
        this.imageRepository = imageRepository;
        this.ticketRepository = ticketRepository;
    }

    public Event SaveEvent(Event e){
        e.setId(1L);
       return eventRepository.save(e);
    }

    public List<Event> ListAllEvents(){
        return eventRepository.findAll();
    }

    public Event FindEventByID(Long id) throws ResourceNotFoundException {
        Optional<Event> eventSearched = eventRepository.findById(id);

        if (eventSearched.isPresent()) {
            Event event = eventSearched.get();

            List<Image> images = imageRepository.findByEventId(id);
            List<Ticket> tickets = ticketRepository.findByEventId(id);

            event.setImages(images);
            event.setTickets(tickets);

            return event;
        } else {
            throw new ResourceNotFoundException("Event with ID " + id + " not found");
        }
    }

    public List<Event> FindEventByCategory(String category) throws BadRequestException{
        Optional<List<Event>> categorySearched = Optional.ofNullable(eventRepository.findByCategory(category));
        if (categorySearched.isPresent()){
            return eventRepository.findByCategory(category);
        }else{
            throw new BadRequestException("Category doesn't exist");
        }
    }

    public List<Event> FindEventByLocation(String location) throws BadRequestException{
        Optional<List<Event>> locationSearched = Optional.ofNullable(eventRepository.findByLocation(location));
        if (locationSearched.isPresent()){
            return eventRepository.findByLocation(location);
        }else{
            throw new BadRequestException("Location doesn't exist");
        }
    }

    public List<Event> FindEventByDate(Date date) throws BadRequestException{
        Optional<List<Event>> dateSearched = Optional.ofNullable(eventRepository.findByDate(date));
        if (dateSearched.isPresent()){
            return eventRepository.findByDate(date);
        } else {
            throw new BadRequestException("There are no events with that date");
        }
    }
    public void DeleteByID(Long id) throws BadRequestException{
        Optional<Event> eventSearched = eventRepository.findById(id);
        if (eventSearched.isPresent()){
            eventRepository.deleteById(id);
            imageRepository.deleteByEventId(id);
            ticketRepository.deleteByEventId(id);
        } else {
            throw new BadRequestException("This event can't be deleted");
        }

    }

    public Event EditEvent(Event event) throws BadRequestException, ResourceNotFoundException {
        Optional<Event> eventSearched = Optional.ofNullable(FindEventByID(event.getId()));
        if (eventSearched.isPresent()){
            return eventRepository.save(event);
        } else {
            throw new ResourceNotFoundException("The event doesn't exist");
        }
    }
}
