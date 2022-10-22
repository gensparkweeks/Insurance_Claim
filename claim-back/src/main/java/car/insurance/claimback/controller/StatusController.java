package car.insurance.claimback.controller;
import car.insurance.claimback.model.Status;
import car.insurance.claimback.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("status")
public class StatusController {

    @Autowired
    private StatusService statusService;

    @GetMapping
    public List<Status> findAll(){
        return statusService.findAll();
    }

    @GetMapping("/{id}")
    public Status findById(@PathVariable int id){

        return statusService.findById(id);
    }

    @PostMapping
    public Status create(@RequestBody Status status){
        return statusService.create(status);
    }

    @PutMapping
    public Status update(@RequestBody Status status){
        return statusService.update(status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        statusService.delete(id);
    }

}
