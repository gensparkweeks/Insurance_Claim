package car.insurance.claimback.dao;
import car.insurance.claimback.model.Claim;
import car.insurance.claimback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClaimDao extends JpaRepository<Claim, Integer> {

    @Query(
            value="SELECT * FROM claim c inner join user u on user_id = u.id where u.username =:name"
            , nativeQuery = true)
    List<Claim> findByName(String name);
}
