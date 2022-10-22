package car.insurance.claimback.dao;
import car.insurance.claimback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    @Query(
            value="select * from user where username=:name"
            , nativeQuery = true)
    public User findByName(String name);
}
