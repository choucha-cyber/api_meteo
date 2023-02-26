package com.weather.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.weather.models.Temperature;
import com.weather.repositories.TemperatureRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TemperatureService implements TemperatureServiceInterface{
	
	TemperatureRepository temperatureRepo;

	public TemperatureService(TemperatureRepository temperatureRepo) {
		super();
		this.temperatureRepo = temperatureRepo;
	}
	
	@Override
	public List<Temperature> getAll() {
		return temperatureRepo.findAll();
	}

	@Override
	public Page<Temperature> getAllByCityName(String cityName, Pageable pageable) {
		//return temperatureRepo.findByCity_CityNameLike(cityName, pageable);
		return temperatureRepo.findByCity_CityNameContainingIgnoreCase(cityName, pageable);
	}

	@Override
	public Temperature getOne(Long id) throws EntityNotFoundException  {
		return temperatureRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("No entity found for id " + id));
	}

	@Override
	public Temperature add(Temperature temperature) {
		return temperatureRepo.save(temperature);
	}

	@Override
	public Temperature update(Temperature temperature) {
		return temperatureRepo.save(temperature);
	}
	
	@Override
	public void deleteById(Long id) {
		temperatureRepo.deleteById(id);
		
	}

}
