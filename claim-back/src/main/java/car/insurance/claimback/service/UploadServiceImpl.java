package car.insurance.claimback.service;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class UploadServiceImpl implements UploadService {
    @Override
    public void uploadFile(MultipartFile file) {

        //Set the path in Hard drive
        String upLoadFolderPath = "/files/";
        //Get full path
        Path path = Paths.get(upLoadFolderPath + file.getOriginalFilename());

        //Use File class to create dir or delete files
        File fileToBeDeleted = new File(String.valueOf(path));
        //Get the directory with no file
        File dir = fileToBeDeleted.getParentFile();

        //Create the directory if no exists
        if (!dir.exists()){
            if (dir.mkdirs()) System.out.println("The directory was created");
        }

        //Delete the file if exists
        if (fileToBeDeleted.exists()){
            if (fileToBeDeleted.delete()) System.out.println("The file was deleted");
        }

        try {
            byte[] data = file.getBytes();
            Files.write(path, data);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
