package car.insurance.claimback.service;
import car.insurance.claimback.dao.CarDao;
import car.insurance.claimback.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    CarDao carDao;

    @Override
    public List<Car> findAll() {
        return carDao.findAll();
    }

    @Override
    public Car findById(int id) {
        return carDao.findById(id).orElseThrow();
    }

    @Override
    public Car create(Car car) {
        return carDao.save(car);
    }

    @Override
    public Car update(Car car) {
        return carDao.save(car);
    }

    @Override
    public void delete(int id) {
        carDao.deleteById(id);
    }
}
