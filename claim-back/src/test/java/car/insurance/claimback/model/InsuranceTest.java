package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class InsuranceTest {

    Insurance insurance = new Insurance();

    @Test
    void getNumber() {
        insurance.setNumber("123");
        assertEquals("123", insurance.getNumber());
    }

    @Test
    void getPrice() {
        insurance.setPrice(120.99);
        assertEquals(120.99, insurance.getPrice());
    }

}