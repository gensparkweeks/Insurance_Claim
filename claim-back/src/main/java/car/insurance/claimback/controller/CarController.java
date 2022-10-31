package car.insurance.claimback.controller;
import car.insurance.claimback.model.Car;
import car.insurance.claimback.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> findAll(){
        return carService.findAll();
    }

    @GetMapping("/{id}")
    public Car findById(@PathVariable int id){
        return carService.findById(id);
    }

    @PostMapping
    public Car create(@RequestBody Car car){
        return carService.create(car);
    }

    @PutMapping
    public Car update(@RequestBody Car car){
        return carService.update(car);
    }
    @DeleteMapping
    public void delete(@PathVariable int id){
        carService.delete(id);
    }
}
