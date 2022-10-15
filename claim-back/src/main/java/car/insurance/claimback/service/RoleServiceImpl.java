package car.insurance.claimback.service;
import car.insurance.claimback.dao.RoleDao;
import car.insurance.claimback.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    private RoleDao roleDao;

    @Override
    public List<Role> findAll() {
        return roleDao.findAll();
    }

    @Override
    public Role findById(int id) {
        return roleDao.findById(id).orElseThrow();
    }

    @Override
    public Role create(Role role) {
        return roleDao.save(role);
    }

    @Override
    public Role update(Role role) {
        return roleDao.save(role);
    }

    @Override
    public void delete(int id) {
        roleDao.deleteById(id);
    }
}
