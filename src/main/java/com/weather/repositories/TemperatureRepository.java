package com.weather.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.models.Temperature;


@Repository
public interface TemperatureRepository extends JpaRepository<Temperature, Long>{



}
