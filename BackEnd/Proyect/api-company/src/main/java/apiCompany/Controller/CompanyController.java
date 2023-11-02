package apiCompany.Controller;

import apiCompany.Exception.BadRequestException;
import apiCompany.Exception.ResourceNotFoundException;
import apiCompany.Model.Company;
import apiCompany.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/company")
public class CompanyController {
    private CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService){
        this.companyService = companyService;
    }

    @PostMapping
    public ResponseEntity<Company> SaveNewCompany(@RequestBody Company c) {
        return ResponseEntity.status(HttpStatus.CREATED).body(companyService.SaveCompany(c));
    }

    @GetMapping
    public ResponseEntity<List<Company>> listAllCompanies() {
        return ResponseEntity.ok(companyService.ListAllCompanies());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Company> findById(@PathVariable Long id) throws BadRequestException {
        return ResponseEntity.ok(companyService.FindCompanyByID(id));
    }

    @PutMapping
    public ResponseEntity<Company> editCompany(@RequestBody Company c) throws BadRequestException {
        Company companyEvent = companyService.EditCompany(c);
        return ResponseEntity.ok(companyEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        companyService.DeleteByID(id);
        return ResponseEntity.ok("The event with id " + id + " was eliminated successfully");
    }
}
