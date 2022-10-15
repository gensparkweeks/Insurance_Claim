package car.insurance.claimback.dao;

import car.insurance.claimback.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarDao extends JpaRepository<Car, Integer> {
}
