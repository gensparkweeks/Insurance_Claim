package car.insurance.claimback.dao;
import car.insurance.claimback.model.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceDao extends JpaRepository<Insurance, Integer> {
}
