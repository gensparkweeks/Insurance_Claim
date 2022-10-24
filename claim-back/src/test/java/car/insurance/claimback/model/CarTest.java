package car.insurance.claimback.model;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CarTest {

    Car car = new Car();

    @Test
    void getYear() {
        car.setYear("2016");
        assertEquals("2016", car.getYear());
    }

    @Test
    void getMark() {
        car.setMark("DODGE");
        assertEquals("DODGE", car.getMark());
    }

    @Test
    void getModel() {
        car.setModel("Challenger");
        assertEquals("Challenger", car.getModel());
    }
}