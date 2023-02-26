package com.weather.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weather.models.City;
import com.weather.services.CityService;




@RestController
@RequestMapping("/cities")
public class CityController {
	
	CityService cityService;

	
	
//		public CityController(CityService cityService) {
//		super();
//		this.cityService = cityService;
//	}
//
//		// Liste des cities (par défaut)
//		@GetMapping({ "", "/" })
//		public List<City> getCities() {
//			return cityService.findAllCities();
//		}
//		
//		// one city by id
//		@GetMapping({"/city/{id}" })
//		public City getCity(Long id) {
//			return cityService.findCityById(id);
//		}
//	
//		// save ube city 
//		@PostMapping("/saveCity")
//		public City savecity( City city) {
//
//			return cityService.saveCity(city);
//		}
//		
//		@PostMapping("/updateCity")
//		public City updatecity(Long id, City city) {
//			if (id != null) {
//				city.setId(id);
//			}
//			return cityService.saveCity(city);
		//}

//		@PostMapping("/deleteCity")
//		public City deleteCityById(Long id) {
//			return cityService.deleteCity(id);
//			
//		}
		
}
