package apiuser.MasterEvents;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class MasterEventsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MasterEventsApplication.class, args);
	}

}
