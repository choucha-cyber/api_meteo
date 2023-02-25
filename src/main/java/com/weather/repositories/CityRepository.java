package com.weather.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.weather.models.City;


@Repository
public interface CityRepository extends JpaRepository<City, Long>{

	// Recherche de recherche d'une city en fonction de son nom
		@Query("SELECT DISTINCT c FROM City c WHERE c.cityName =:CityName")
		List<City> findByCityName(String CityName);

}
