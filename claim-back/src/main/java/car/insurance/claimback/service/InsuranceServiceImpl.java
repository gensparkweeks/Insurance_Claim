package car.insurance.claimback.service;
import car.insurance.claimback.dao.InsuranceDao;
import car.insurance.claimback.model.Insurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InsuranceServiceImpl implements InsuranceService{

    @Autowired
    InsuranceDao insuranceDao;

    @Override
    public List<Insurance> findAll() {
        return insuranceDao.findAll();
    }

    @Override
    public Insurance findById(int id) {
        return insuranceDao.findById(id).orElseThrow();
    }


    @Override
    public Insurance create(Insurance insurance) {
        return insuranceDao.save(insurance);
    }

    @Override
    public Insurance update(Insurance insurance) {
        return insuranceDao.save(insurance);
    }

    @Override
    public void delete(int id) {
        insuranceDao.deleteById(id);
    }
}
