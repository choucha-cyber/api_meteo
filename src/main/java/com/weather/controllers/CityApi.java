package com.weather.controllers;


import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.weather.models.City;
import com.weather.models.Marker;
import com.weather.models.Temperature;
import com.weather.services.CityServiceInterface;
import com.weather.services.MarkerServiceInterface;
import com.weather.services.TemperatureServiceInterface;


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class CityApi {
	
	private final CityServiceInterface cityServiceInterface;
	private final TemperatureServiceInterface temperatureServiceInterface;
	private final MarkerServiceInterface markerServiceInterface;
	
	
	
//	private static final ObjectMapper objectMapper = new ObjectMapper()
//	        .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
//	        .configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
//	
//	//objectMapper.convertValue(object, value.class);
	

	 public CityApi(CityServiceInterface cityServiceInterface, TemperatureServiceInterface temperatureServiceInterface,
				MarkerServiceInterface markerServiceInterface) {
			super();
			this.cityServiceInterface = cityServiceInterface;
			this.temperatureServiceInterface = temperatureServiceInterface;
			this.markerServiceInterface = markerServiceInterface;
		}

	 //CITIES
	 
	@GetMapping("/cities")
	    public List<City> all() {
	        System.out.println("Fetched all cities");
	        return cityServiceInterface.getAll();
	    }
	 

	@GetMapping("/cities/{id}")
	    public City one(@PathVariable Long id) {
	        System.out.println("Fetched city with id: " + id);
	        return cityServiceInterface.getOne(id);
	    }
	 
//	 @PostMapping("/cities")
//	    public City add(@RequestBody City city) {
//	        System.out.println("Got a city");
//	        return cityServiceInterface.add(city);
//	    }
	 
	//Ajout de la city si non existante en BD
		 @PostMapping("/cities")
		    public City add(@RequestBody City city) {
			 List<City> listCity = cityServiceInterface.getCityByCityName(city.getCityName());
			 if(listCity.size()==0){
				 System.out.println("Got a city");
			        return cityServiceInterface.add(city);
			 }else{
				 System.out.println("La ville de : "+city.getCityName()+" existe déjà !");
			return city;
			 }
		       
		    }
	 
	 @PutMapping("/cities")
	    public City update(@RequestBody City city) {
	        System.out.println("Updated a city");
	        return cityServiceInterface.update(city);
	    }
	 
	 @DeleteMapping("/cities/{id}")
	    public void delete(@PathVariable Long id) {
	        System.out.println("Deleted city with id: " + id);
	        cityServiceInterface.deleteById(id);
	    }
		 
	 
	 
	 //TEMPERATURES
	 
	 @GetMapping("/temperatures")
	    public List<Temperature> allTemp() {
	        System.out.println("Fetched all temperatures");
	        return temperatureServiceInterface.getAll();
	    }
	 
	 @GetMapping("/temperatures/{id}")
	    public Temperature oneTemp(@PathVariable Long id) {
	        System.out.println("Fetched temperature with id: " + id);
	        return temperatureServiceInterface.getOne(id);
	    }
	 
	 @PostMapping("/temperatures")
	    public Temperature addTemp(@RequestBody Temperature temperature) {
		 	
	        System.out.println("Got a temperature");
	        Temperature temperatureToParse = new Temperature();
	        temperatureToParse.setCity(temperature.getCity());
	        return temperatureServiceInterface.add(temperature);
	    }
	 
	 @PutMapping("/temperatures")
	    public Temperature updateTemp(@RequestBody Temperature temperature) {
	        System.out.println("Updated a temperature");
	        return temperatureServiceInterface.update(temperature);
	    }
	 
	 @DeleteMapping("/temperatures/{id}")
	    public void deleteTemp(@PathVariable Long id) {
	        System.out.println("Deleted temperature with id: " + id);
	        temperatureServiceInterface.deleteById(id);
	    }
	 
	 //MARKER
	 @GetMapping("/markers")
	    public List<Marker> allMarkers() {
	        System.out.println("Fetched all markers");
	        return markerServiceInterface.getAll();
	    }
	 
	 @GetMapping("/markers/{id}")
	    public Marker oneMarker(@PathVariable Long id) {
	        System.out.println("Fetched marker with id: " + id);
	        return markerServiceInterface.getOne(id);
	    }
	 
	 @PostMapping("/markers")
	    public Marker addMarker(@RequestBody Marker marker) {
		 	System.out.println("Got a marker");
	        Marker markerToParse = new Marker();
	        markerToParse.setImg(marker.getImg());
	        return markerServiceInterface.add(marker);
	    }
	 
	 @DeleteMapping("/markers/{id}")
	    public void deleteMarker(@PathVariable Long id) {
	        System.out.println("Deleted marker with id: " + id);
	        markerServiceInterface.deleteById(id);
	    }
}
