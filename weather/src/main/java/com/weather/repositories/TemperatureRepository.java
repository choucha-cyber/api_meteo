package com.weather.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.models.Temperature;


@Repository
public interface TemperatureRepository extends JpaRepository<Temperature, Long>{

	Page<Temperature> findByCity_CityNameContainingIgnoreCase(String CityName, Pageable pageable);
    Page<Temperature> findByCity_CityNameLike(String CityName, Pageable pageable);

}
