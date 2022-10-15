package car.insurance.claimback.service;
import car.insurance.claimback.model.Type;
import java.util.List;

public interface TypeService {

    List<Type> findAll();
    Type findById(int id);
    Type create(Type type);
    Type update(Type type);
    void delete(int id);
}
