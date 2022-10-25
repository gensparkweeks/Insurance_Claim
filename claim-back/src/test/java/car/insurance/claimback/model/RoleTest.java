package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RoleTest {

    Role role = new Role();

    @Test
    void getRole() {
        role.setRole("ROLE_USER");
        assertEquals("ROLE_USER", role.getRole());
    }

}