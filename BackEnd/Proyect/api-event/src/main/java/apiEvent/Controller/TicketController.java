package apiEvent.Controller;

import apiEvent.Exception.BadRequestException;
import apiEvent.Model.Event;
import apiEvent.Model.Image;
import apiEvent.Model.Ticket;
import apiEvent.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ticket")
public class TicketController {

    private TicketService ticketService;

    @Autowired
    public TicketController( TicketService ticketService){
        this.ticketService = ticketService;
    }

    @PostMapping
    public ResponseEntity<Ticket> SaveNewTicket(@RequestBody Ticket ticket) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ticketService.SaveTicket(ticket));
    }

    @PutMapping
    public ResponseEntity<Ticket> editTicket(@RequestBody Ticket ticket) throws BadRequestException {
        Ticket editedTicket = ticketService.EditTicket(ticket);
        return ResponseEntity.ok(editedTicket);
    }

}
