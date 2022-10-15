package car.insurance.claimback.dao;
import car.insurance.claimback.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDao extends JpaRepository<Type, Integer> {

}
