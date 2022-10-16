package car.insurance.claimback.controller;
import car.insurance.claimback.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
@RequestMapping("upload")
public class UploadController {
    @Autowired
    private UploadService uploadService;

    @PostMapping
    public void uploadFile(@RequestParam("file0") MultipartFile multipartFile){
        uploadService.uploadFile(multipartFile);
    }

    @PutMapping
    public void updateFile(@RequestParam("file0") MultipartFile multipartFile){
        uploadService.uploadFile(multipartFile);
    }
}
