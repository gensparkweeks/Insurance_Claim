package car.insurance.claimback.service;
import car.insurance.claimback.dao.TypeDao;
import car.insurance.claimback.model.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TypeServiceImpl implements TypeService{

    @Autowired
    TypeDao typeDao;

    @Override
    public List<Type> findAll() {
        return typeDao.findAll();
    }

    @Override
    public Type findById(int id) {
        return typeDao.findById(id).orElseThrow();
    }

    @Override
    public Type create(Type type) {
        return typeDao.save(type);
    }

    @Override
    public Type update(Type type) {
        return typeDao.save(type);
    }

    @Override
    public void delete(int id) {
        typeDao.deleteById(id);
    }
}
