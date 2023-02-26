package com.weather.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.weather.models.Temperature;

public interface TemperatureServiceInterface {
	
	List<Temperature> getAll();
    Temperature getOne(Long id);
    Temperature add(Temperature temperature);
    Temperature update(Temperature temperature);
    void deleteById(Long id);
    
    Page<Temperature> getAllByCityName(String cityName, Pageable pageable);

}
