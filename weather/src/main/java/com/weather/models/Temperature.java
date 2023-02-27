package com.weather.models;


import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="temperatures")
public class Temperature{
	
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//    private Double value;
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date timestamp;
//    @ManyToOne
//    @JoinColumn(name = "city_id")
//    private City city;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double value;
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id")
    private City city;
    
	public Temperature() {}

	public Temperature(Double value, Date timestamp, City city) {
		super();
		this.value = value;
		this.timestamp = timestamp;
		this.city = city;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Temperature [id=" + id + ", value=" + value + ", timestamp=" + timestamp + ", city=" + city + "]";
	}

}