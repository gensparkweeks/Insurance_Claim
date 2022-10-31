package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
class TypeTest {
    Type type = new Type();
    @Test
    void getType() {
        type.setType("Vandalism");
        assertEquals("Vandalism", type.getType());
    }
}