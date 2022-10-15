package car.insurance.claimback.controller;
import car.insurance.claimback.model.Role;
import car.insurance.claimback.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<Role> findByAll(){
        return roleService.findAll();
    }

    @GetMapping("/{id}")
    public Role findById(@PathVariable int id){
        return roleService.findById(id);
    }

    @PostMapping
    public Role create(@RequestBody Role role){
        return roleService.create(role);
    }

    @PutMapping
    public Role update(@RequestBody Role role){
        return roleService.create(role);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        roleService.delete(id);
    }

}
