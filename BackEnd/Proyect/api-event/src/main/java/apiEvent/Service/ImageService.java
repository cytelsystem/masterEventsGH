package apiEvent.Service;

import apiEvent.Exception.BadRequestException;
import apiEvent.Exception.ResourceNotFoundException;
import apiEvent.Model.Event;
import apiEvent.Model.Image;
import apiEvent.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageService {

    private ImageRepository imageRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    public Image SaveImage(Image image){
        image.setId(1L);
        image.setEventId(1L);
        return imageRepository.save(image);
    }

    public void DeleteImage(Long Id) throws ResourceNotFoundException{
        Optional<Image> imageSearched = imageRepository.findById(Id);
        if (imageSearched.isPresent()){
            imageRepository.deleteById(Id);
        }else{
            throw new ResourceNotFoundException("This image doesn't exist");
        }
    }

}
