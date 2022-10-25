package car.insurance.claimback.model;

import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class ClaimTest {

    Claim claim = new Claim();

    @Test
    void getDescription() {
        claim.setDescription("Hello World");
        assertEquals("Hello World", claim.getDescription());
    }

    @Test
    void getUpload() {
        claim.setUpload("image.png");
        assertEquals("image.png", claim.getUpload());
    }
}