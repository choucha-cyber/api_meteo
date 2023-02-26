package com.weather.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="markers")
public class Marker {

	/*
	 * {
  "markers": [
    {
      "properties": {
        "message": "Bonjour",
        "image": "10d"
      },
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.2902059219654234,
          48.895086689110656
        ]
      },
      "id": 1
    },
	 */
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "lat")
	private Double latitude;
	
	@Column(name = "lng")
	private Double longitude;
	
	private String img;//path img

	private String message;

	public Marker() {}

	public Marker(Double latitude, Double longitude, String img, String message) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
		this.img = img;
		this.message = message;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void getCoords(Double lat, Double lon) {
		setLatitude(lat);
		setLongitude(lon);
		
	}
	
}