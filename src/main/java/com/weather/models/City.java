package com.weather.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="worldcities")
public class City {
	
//	private Integer id;
//    private String city;
//    private String cityAscii;
//    private Double lat;
//    private Double lng;
//    private String country;
//    private String iso2;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "city")
	private String cityName;
	
	@Column(name = "city_ascii")
	private String cityAscii;
	
	@Column(name = "lat")
	private Double latitude;
	
	@Column(name = "lng")
	private Double longitude;
	private String country;
	private String iso2;
	
	public City() {}

	public City(String cityName, String cityAscii, Double latitude, Double longitude, String country,
			String iso2) {
		super();
		this.cityName = cityName;
		this.cityAscii = cityAscii;
		this.latitude = latitude;
		this.longitude = longitude;
		this.country = country;
		this.iso2 = iso2;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getCityAscii() {
		return cityAscii;
	}

	public void setCityAscii(String cityAscii) {
		this.cityAscii = cityAscii;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getIso2() {
		return iso2;
	}

	public void setIso2(String iso2) {
		this.iso2 = iso2;
	}

	@Override
	public String toString() {
		return "WorldCity [id=" + id + ", cityName=" + cityName + ", cityAscii=" + cityAscii + ", latitude=" + latitude
				+ ", longitude=" + longitude + ", country=" + country + ", iso2=" + iso2 + "]";
	}

}