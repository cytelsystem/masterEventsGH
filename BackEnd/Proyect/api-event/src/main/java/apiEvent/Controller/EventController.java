package apiEvent.Controller;

import apiEvent.Exception.BadRequestException;
import apiEvent.Exception.ResourceNotFoundException;
import apiEvent.Model.Event;
import apiEvent.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/event")
public class EventController {
    private EventService eventService;

    @Autowired
    public EventController(EventService eventService){
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<Event> SaveNewUser(@RequestBody Event event) {
        return ResponseEntity.status(HttpStatus.CREATED).body(eventService.SaveEvent(event));
    }

    @GetMapping
    public ResponseEntity<List<Event>> listAllEvents() {
        return ResponseEntity.ok(eventService.ListAllEvents());
    }

    @GetMapping("/random")
    public ResponseEntity<List<Event>> randomEvent() {
        List<Event> eventsList = eventService.ListAllEvents();
        Collections.shuffle(eventsList);
        return ResponseEntity.ok(eventsList);
    }
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Event>> eventByCategory(@PathVariable String category) throws BadRequestException {
        return ResponseEntity.ok(eventService.FindEventByCategory(category));
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<Event>> eventByLocation(@PathVariable String location) throws BadRequestException{
        return ResponseEntity.ok(eventService.FindEventByLocation(location));
    }

    @GetMapping("date/{date}")
    public ResponseEntity<List<Event>> eventByDate(@PathVariable Date date) throws BadRequestException{
        return ResponseEntity.ok(eventService.FindEventByDate(date));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> findById(@PathVariable Long id) throws BadRequestException {
        return ResponseEntity.ok(eventService.FindEventByID(id));
    }

    @PutMapping
    public ResponseEntity<Event> editEvent(@RequestBody Event event) throws BadRequestException {
        Event editedEvent = eventService.EditEvent(event);
        return ResponseEntity.ok(editedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        eventService.DeleteByID(id);
        return ResponseEntity.ok("The event with id " + id + " was eliminated successfully");
    }


}
