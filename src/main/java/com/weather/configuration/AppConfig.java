package com.weather.configuration;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.weather.models.City;
import com.weather.models.Temperature;
import com.weather.repositories.CityRepository;
import com.weather.repositories.TemperatureRepository;



@Configuration
public class AppConfig {
	
//	@Bean
//    CommandLineRunner commandLineRunner(CityRepository cityRepository, TemperatureRepository temperatureRepository) {
//        return args -> {
//        	
//      
//            City city = cityRepository.findById((long) 1).get();
//            Temperature temperature = new Temperature();
//            temperature.setTimestamp(new Date());
//            temperature.setValue(12.05);
//            temperature.setCity(city);
//            temperatureRepository.save(temperature);
//        };
//    }

}
