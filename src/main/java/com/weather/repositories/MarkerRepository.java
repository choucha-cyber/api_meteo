package com.weather.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.models.Marker;

@Repository
public interface MarkerRepository extends JpaRepository<Marker, Long>{

}
