package com.weather.configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;






@Configuration
public class AppConfig implements WebMvcConfigurer{
	
	
	@Override
	public void addCorsMappings (CorsRegistry registry ) {
	
		registry.addMapping("/**");
	}
	

	
//	@Bean
//    CommandLineRunner commandLineRunner(CityRepository cityRepository, TemperatureRepository temperatureRepository) {
//        return args -> {
//        	
//      
////            City city = cityRepository.findById((long) 1).get();
////            Temperature temperature = new Temperature();
////            temperature.setTimestamp(new Date());
////            temperature.setValue(12.05);
////            temperature.setCity(city);
////            temperatureRepository.save(temperature);
//        };
//    }

}
