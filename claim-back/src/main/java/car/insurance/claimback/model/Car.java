package car.insurance.claimback.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String year;
    private String mark;
    private String model;

}
