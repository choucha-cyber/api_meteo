package com.weather.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.weather.models.City;
import com.weather.repositories.CityRepository;

import jakarta.persistence.EntityNotFoundException;


@Service
public class CityService implements CityServiceInterface{
	
	private final CityRepository cityRepo;
	

	public CityService(CityRepository cityRepo) {
		super();
		this.cityRepo = cityRepo;
	}

	@Override
    public List<City> getAll() {
        return cityRepo.findAll();
    }

    @Override
	public City getOne(Long id) throws EntityNotFoundException {
        return cityRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("No entity found for id " + id));
    }

    @Override
    public City add(City city) {
        return cityRepo.save(city);
    }

    @Override
    public City update(City city) {
        return cityRepo.save(city);
    }

    @Override
    public void deleteById(Long id) {
        cityRepo.deleteById(id);
    }
    
    //Recherche d'un city en fonction de son nom
    public List<City> getCityByCityName(String cityName) {
    	return cityRepo.findByCityName(cityName);
    }



}
