package car.insurance.claimback.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;

}
