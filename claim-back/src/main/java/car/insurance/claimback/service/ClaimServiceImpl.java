package car.insurance.claimback.service;
import car.insurance.claimback.dao.ClaimDao;
import car.insurance.claimback.model.Claim;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaimServiceImpl implements ClaimService{

    @Autowired
    public ClaimDao claimDao;

    @Override
    public List<Claim> findAll() {
        return claimDao.findAll();
    }

    @Override
    public Claim findById(int id) {
        return claimDao.findById(id).orElseThrow();
    }

    @Override
    public Claim create(Claim claim) {
        return claimDao.save(claim);
    }

    @Override
    public Claim update(Claim claim) {
        return claimDao.save(claim);
    }

    @Override
    public void delete(int id) {
        claimDao.deleteById(id);
    }

    @Override
    public List<Claim> findByName(String name) {
        return claimDao.findByName(name);
    }


}
