package car.insurance.claimback.controller;
import car.insurance.claimback.model.UserInfo;
import car.insurance.claimback.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("userinfo")
public class UserInfoController {

    @Autowired
    public UserInfoService userInfoService;

    @GetMapping
    public List<UserInfo> findAll(){
        return userInfoService.findAll();
    }

    @GetMapping("/{id}")
    public UserInfo findById(@PathVariable int id){
        return userInfoService.findById(id);
    }

    @PostMapping
    public UserInfo create(@RequestBody UserInfo userInfo){
        return userInfoService.create(userInfo);
    }

    @PutMapping
    public UserInfo update(@RequestBody UserInfo userInfo){
        return userInfoService.update(userInfo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        userInfoService.delete(id);
    }
}
