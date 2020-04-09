package sobar.app.service.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sobar.app.service.Utils;
import sobar.app.service.exception.BusinessNotFoundException;
import sobar.app.service.exception.InvalidParamFormatException;
import sobar.app.service.model.Business;
import sobar.app.service.repository.BusinessRepository;
import sun.util.BuddhistCalendar;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
public class BusinessController {

    private final BusinessRepository repository;

    public BusinessController(BusinessRepository repository) {
        this.repository = repository;
    }

    // Aggregate root

    @GetMapping("/businesses")
    public List<Business> all() {
        return repository.findAll();
    }

//    @PostMapping("/businesses")
//    public Business newEmployee(@RequestBody Business newEmployee) {
//        return repository.save(newEmployee);
//    }

    // Single item

    @GetMapping("/nearby")
    public List<Business> getNearby(@RequestParam String origin, @RequestParam Integer radius) {
        String[] tok = origin.split(",");

        if (tok.length != 2) {
            throw new InvalidParamFormatException();
        }

        List<Business> nearby = new ArrayList<>();
        double lat = Double.parseDouble(tok[0]);
        double lon = Double.parseDouble(tok[1]);

        for (Business b : repository.findAll()) {
            if (Utils.dist(lat, lon, b.getLatitude(), b.getLongitude()) <= radius) {
                nearby.add(b);
            }
        }

        return nearby;
    }

    @GetMapping("/businesses/{id}")
    public Business one(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new BusinessNotFoundException(id));
    }

//    @PutMapping("/employees/{id}")
//    public Business replaceEmployee(@RequestBody Business newEmployee, @PathVariable Long id) {
//        return repository.findById(id)
//                .map(employee -> {
//                    employee.setName(newEmployee.getName());
//                    employee.setRole(newEmployee.getRole());
//                    return repository.save(employee);
//                })
//                .orElseGet(() -> {
//                    newEmployee.setId(id);
//                    return repository.save(newEmployee);
//                });
//    }

//    @DeleteMapping("/businesses/{id}")
//    public void deleteEmployee(@PathVariable Long id) {
//        repository.deleteById(id);
//    }

}
