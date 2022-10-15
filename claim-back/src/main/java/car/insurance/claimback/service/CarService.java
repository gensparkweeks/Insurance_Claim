package car.insurance.claimback.service;
import car.insurance.claimback.model.Car;
import java.util.List;

public interface CarService {

    List<Car> findAll();
    Car findById (int id);
    Car create(Car car);
    Car update(Car car);
    void delete(int id);
}
