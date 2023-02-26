package com.weather.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.weather.models.City;

public interface CityServiceInterface {
	
	List<City> getAll();
    City getOne(Long id);
    City add(City city);
    City update(City city);
    void deleteById(Long id);
    List<City> getCityByCityName(String cityName);
    
    Page<City> getCityByCityName(String cityName, Pageable pageable);

    Page<City> getCityPage(Pageable pageable);

}
