package car.insurance.claimback.controller;
import car.insurance.claimback.model.Claim;
import car.insurance.claimback.service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("claim")
public class ClaimController {

    @Autowired
    private ClaimService claimService;

    @GetMapping
    public List<Claim> findAll(){
        return claimService.findAll();
    }

    @GetMapping("/{id}")
    public Claim findById(@PathVariable int id){
        return claimService.findById(id);
    }

    @PostMapping
    public Claim create(@RequestBody Claim claim){
        return claimService.create(claim);
    }

    @PutMapping
    public Claim update(@RequestBody Claim claim){
        return claimService.update(claim);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        claimService.delete(id);
    }

    @GetMapping("name/{name}")
    public List<Claim> findByName(@PathVariable String name){
        return claimService.findByName(name);
    }

}
