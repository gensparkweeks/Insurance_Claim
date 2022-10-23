package car.insurance.claimback.service;
import car.insurance.claimback.model.Claim;
import java.util.List;

public interface ClaimService {

    List<Claim> findAll();
    Claim findById(int id);
    Claim create(Claim claim);
    Claim update(Claim claim);
    void delete(int id);
    List<Claim> findByName(String name);
}
