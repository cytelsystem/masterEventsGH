package apiEvent.Repository;

import apiEvent.Model.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends MongoRepository<Image, Long> {
    List<Image> findByEventId(Long id);
    List<Image> deleteByEventId(Long eventId);

}
