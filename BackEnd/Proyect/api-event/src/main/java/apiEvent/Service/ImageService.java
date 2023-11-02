package apiEvent.Service;

import apiEvent.Exception.BadRequestException;
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
        return imageRepository.save(image);
    }

}
