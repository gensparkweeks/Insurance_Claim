package car.insurance.claimback.service;
import car.insurance.claimback.dao.CarDao;
import car.insurance.claimback.dao.UserDao;
import car.insurance.claimback.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    public UserDao userDao;

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public User findById(int id) {
        return userDao.findById(id).orElseThrow();
    }

    @Override
    public User create(User user) {
        return userDao.save(user);
    }

    @Override
    public User update(User user) {
        return userDao.save(user);
    }

    @Override
    public void delete(int id) {
        userDao.deleteById(id);
    }
}
