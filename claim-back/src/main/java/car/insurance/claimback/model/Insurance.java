package car.insurance.claimback.model;
import lombok.Data;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Insurance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String number;
    private Date created;
    private Double price;

    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

}
