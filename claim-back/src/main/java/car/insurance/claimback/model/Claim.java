package car.insurance.claimback.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String created;
    private String description;
    private String word;
    private String pdf;
    private char status;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name="type_id", referencedColumnName = "id")
    private Type type;

}
