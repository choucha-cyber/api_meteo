package com.weather.controllers;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weather.models.Temperature;
import com.weather.services.TemperatureService;

@RestController
@RequestMapping("/temperatures")
public class TemperatureController {
	
	TemperatureService temperatureService;

	public TemperatureController(TemperatureService temperatureService) {
		super();
		this.temperatureService = temperatureService;
	}
	
//	public Temperature saveTempareature(Temperature temperature) {
//		return temperatureService.saveTemperature(temperature);
//	}



}
