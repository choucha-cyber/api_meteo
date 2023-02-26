package com.weather.services;

import java.util.List;

import com.weather.models.Temperature;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TemperatureServiceInterface {
	
	List<Temperature> getAll();

    Page<Temperature> getAllByCityName(String cityName, Pageable pageable);

    Temperature getOne(Long id);
    Temperature add(Temperature temperature);
    Temperature update(Temperature temperature);
    void deleteById(Long id);

}
