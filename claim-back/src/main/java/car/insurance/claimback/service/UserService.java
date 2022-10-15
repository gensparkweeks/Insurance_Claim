package car.insurance.claimback.service;

import car.insurance.claimback.model.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User findById(int id);
    User create(User user);
    User update(User user);
    void delete(int id);

}
