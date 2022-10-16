package car.insurance.claimback.service;
import car.insurance.claimback.model.Insurance;
import java.util.List;

public interface InsuranceService {

    List<Insurance> findAll();
    Insurance findById(int id);
    Insurance create(Insurance insurance);
    Insurance update(Insurance insurance);
    void delete(int id);
}
