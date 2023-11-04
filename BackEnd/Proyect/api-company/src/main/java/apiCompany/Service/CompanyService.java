package apiCompany.Service;

import apiCompany.Exception.BadRequestException;
import apiCompany.Model.Company;
import apiCompany.Repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    private CompanyRepository companyRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;
    }

    public Company SaveCompany(Company c){
        return companyRepository.save(c);
    }

    public List<Company> ListAllCompanies(){
        return companyRepository.findAll();
    }

    public Company FindCompanyByID(Long id) throws BadRequestException{
        Optional<Company> company = companyRepository.findById(id);
        if (company.isPresent()){
            return companyRepository.findById(id).get();
        }else{
            throw new BadRequestException("This company doesn't exist");
        }
    }

    public void DeleteByID(Long id) throws BadRequestException{
        Optional<Company> company = companyRepository.findById(id);
        if (company.isPresent()) {
            companyRepository.delete(company.get());
        } else {
            throw new BadRequestException("This company can't be deleted since it doesn't exist");
        }
    }

    public Company EditCompany(Company company) throws BadRequestException {
        Optional<Company> companySearched = Optional.ofNullable(FindCompanyByID(company.getId()));
        if (companySearched.isPresent()){
            return companyRepository.save(company);
        } else {
            throw new BadRequestException("The company can't be edited");
        }
    }
}
