package car.insurance.claimback.controller;
import car.insurance.claimback.model.Insurance;
import car.insurance.claimback.service.InsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("insurance")
public class InsuranceController {

    @Autowired
    private InsuranceService insuranceService;

    @GetMapping
    public List<Insurance> findAll(){
        return insuranceService.findAll();
    }

    @GetMapping("/{id}")
    public Insurance findById(@PathVariable int id){
        return insuranceService.findById(id);
    }

    @PostMapping
    public Insurance create(@RequestBody Insurance insurance){
        return insuranceService.create(insurance);
    }

    @PutMapping
    public Insurance update(@RequestBody Insurance insurance){
        return insuranceService.update(insurance);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        insuranceService.delete(id);
    }
}
