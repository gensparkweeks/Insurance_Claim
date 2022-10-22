package car.insurance.claimback.service;
import car.insurance.claimback.dao.UserDao;
import car.insurance.claimback.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        User user;
        Optional<User> opt = userDao.findById(id);

        if (opt.isPresent()){
            user = opt.get();
        }else{
            throw new RuntimeException("The user id: "+ id + " wasn't found");
        }

        return user;
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

    @Override
    public User findByName(String name) {
        return userDao.findByName(name);
    }


}
