package car.insurance.claimback.service;
import car.insurance.claimback.model.UserInfo;
import java.util.List;

public interface UserInfoService {

    List<UserInfo> findAll();
    UserInfo findById(int id);
    UserInfo create(UserInfo userInfo);
    UserInfo update(UserInfo userInfo);
    void delete(int id);

    public Object getInfoForClaim(int id);

}
