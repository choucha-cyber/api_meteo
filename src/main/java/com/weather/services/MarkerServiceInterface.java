package com.weather.services;

import java.util.List;

import com.weather.models.Marker;

public interface MarkerServiceInterface {
	
	List<Marker> getAll();
    Marker getOne(Long id);
    Marker add(Marker marker);
    Marker update(Marker marker);
    void deleteById(Long id);

}