package car.insurance.claimback.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String role;

    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

}