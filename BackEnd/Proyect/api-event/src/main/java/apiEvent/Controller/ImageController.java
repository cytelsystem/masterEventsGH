package apiEvent.Controller;

import apiEvent.Exception.BadRequestException;
import apiEvent.Exception.ResourceNotFoundException;
import apiEvent.Model.Event;
import apiEvent.Model.Image;
import apiEvent.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/image")
public class ImageController {

    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService){
        this.imageService = imageService;
    }

    @PostMapping
    public ResponseEntity<Image> SaveNewImage(@RequestBody Image image) {
        return ResponseEntity.status(HttpStatus.CREATED).body(imageService.SaveImage(image));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        imageService.DeleteImage(id);
        return ResponseEntity.ok("The image with id " + id + " was eliminated successfully");
    }


}
