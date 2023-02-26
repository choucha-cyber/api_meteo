package com.weather.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.weather.models.City;

import java.util.List;


@Repository
public interface CityRepository extends JpaRepository<City, Long>{

	// Recherche de recherche d'une city en fonction de son nom
	@Query(value="SELECT * FROM worldcities c WHERE c.city = :CityName limit 1",  nativeQuery = true)
	List <City> findByCityName(String CityName);

	Page<City> findCitiesByCityNameContainingIgnoreCase(String CityName, Pageable pageable);

	Page<City> getCitiesBy( Pageable pageable);
}
