package apiEvent.Service;


import apiEvent.Exception.BadRequestException;
import apiEvent.Exception.ResourceNotFoundException;
import apiEvent.Model.Event;
import apiEvent.Model.Image;
import apiEvent.Model.Ticket;
import apiEvent.Repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketService {

    private TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket SaveTicket(Ticket ticket) {
        ticket.setId(1L);
        ticket.setEventId(1L);
        return ticketRepository.save(ticket);
    }

    public Ticket FindTicketByID(Long id) throws BadRequestException {
        Optional<Ticket> ticketSearched = ticketRepository.findById(id);
        if (ticketSearched.isPresent()) {
            return ticketRepository.findById(id).get();
        } else {
            throw new BadRequestException("This ticket doesn't exist");
        }
    }

    public void DeleteTicket(Long Id) throws ResourceNotFoundException {
        Optional<Ticket> ticketSearched = ticketRepository.findById(Id);
        if (ticketSearched.isPresent()) {
            ticketRepository.deleteById(Id);
        } else {
            throw new ResourceNotFoundException("This ticket doesn't exist");
        }
    }

        public Ticket EditTicket (Ticket ticket) throws BadRequestException {
            Optional<Ticket> ticketSearched = Optional.ofNullable(FindTicketByID(ticket.getId()));
            if (ticketSearched.isPresent()) {
                return ticketRepository.save(ticket);
            } else {
                throw new BadRequestException("This ticket doesn't exist");
            }
        }
}
