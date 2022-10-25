package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StatusTest {

    Status status = new Status();

    @Test
    void getStatus() {
        status.setStatus("Created");
        assertEquals("Created", status.getStatus());
    }
}