package sobar.app.service;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sobar.app.service.model.Business;
import sobar.app.service.repository.BusinessRepository;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

@Configuration
@Slf4j
class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(BusinessRepository repository) {
        FileInputStream inputStream = null;
        Scanner sc = null;

        Gson gson = new Gson();
        ArrayList<Business> businesses = new ArrayList<Business>();

        try {
            inputStream = new FileInputStream("C:/Users/Haxerus/Software Eng Courses/2XB3/Yelp Dataset/business.json");
            sc = new Scanner(inputStream, "UTF-8");

            int i = 0;
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                Business b = gson.fromJson(line, Business.class);

                if (b.getCategories() != null && b.getCategories().toLowerCase().contains("bar")) {
                    businesses.add(b);
                }

                i++;
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            if (sc != null) {
                sc.close();
            }
        }


        return args -> {
            for (Business bar : businesses) {
                log.info("Preloading " + repository.save(bar));
            }
        };
    }
}