package car.insurance.claimback.controller;
import car.insurance.claimback.model.Type;
import car.insurance.claimback.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("type")
public class TypeController {

    @Autowired
    private TypeService typeService;

    @GetMapping
    public List<Type> findAll(){
        return typeService.findAll();
    }

    @GetMapping("/{id}")
    public Type findById(@PathVariable int id){
        return typeService.findById(id);
    }

    @PostMapping
    public Type create(@RequestBody Type type){
        return typeService.create(type);
    }

    @PutMapping
    public Type update(@RequestBody Type type){
        return typeService.update(type);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        typeService.delete(id);
    }
}
