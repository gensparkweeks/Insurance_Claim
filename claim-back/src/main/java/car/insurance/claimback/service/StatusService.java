package car.insurance.claimback.service;
import car.insurance.claimback.model.Status;
import java.util.List;

public interface StatusService {

    List<Status> findAll();
    Status findById(int id);
    Status create(Status status);
    Status update(Status status);
    void delete(int id);

}
