package com.weather.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.weather.models.Marker;
import com.weather.repositories.MarkerRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MarkerService implements MarkerServiceInterface{
	
	MarkerRepository markerRepo;
	

	public MarkerService(MarkerRepository markerRepo) {
		super();
		this.markerRepo = markerRepo;
	}

	@Override
	public List<Marker> getAll() {
		return markerRepo.findAll();
	}

	@Override
	public Marker getOne(Long id) throws EntityNotFoundException{
		return markerRepo.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("No entity found for id " + id));
	}

	@Override
	public Marker add(Marker marker) {
		return markerRepo.save(marker);
	}

	@Override
	public Marker update(Marker marker) {
		return markerRepo.save(marker);
	}

	@Override
	public void deleteById(Long id) {
		markerRepo.deleteById(id);
		
	}

}
