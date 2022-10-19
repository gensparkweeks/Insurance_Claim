package car.insurance.claimback.dao;
import car.insurance.claimback.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {

    @Query(
            value="select u.first, u.last, i.number, c.year, c.mark, c.model from user_info u inner join insurance i on u.user_id=i.user_id inner join car c on c.id=u.user_id where u.user_id=:id"
            , nativeQuery = true)
    Object getInfoForClaim(int id);

}
