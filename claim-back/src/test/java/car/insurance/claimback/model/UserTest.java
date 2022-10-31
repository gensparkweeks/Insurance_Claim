package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
class UserTest {

    private User user = new User();
    @Test
    void getUsername() {
        user.setUsername("admin");
        assertEquals("admin", user.getUsername());
    }

}