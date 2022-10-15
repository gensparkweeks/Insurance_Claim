package car.insurance.claimback.service;

import car.insurance.claimback.model.Role;

import java.util.List;

public interface RoleService {

    List<Role> findAll();
    Role findById(int id);
    Role create(Role role);
    Role update(Role role);
    void delete(int id);
}
