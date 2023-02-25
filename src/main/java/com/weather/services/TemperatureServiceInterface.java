package com.weather.services;

import java.util.List;

import com.weather.models.Temperature;

public interface TemperatureServiceInterface {
	
	List<Temperature> getAll();
    Temperature getOne(Long id);
    Temperature add(Temperature temperature);
    Temperature update(Temperature temperature);
    void deleteById(Long id);

}
