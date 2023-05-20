package com.ssafy.vue.model;

import java.math.BigDecimal;

public class Attraction {
	private int contentId;
	private String title;
	private String addr;
	private String img;
	private String overview;
	private BigDecimal latitude;
	private BigDecimal longitude;

	public int getContentId() {
		return contentId;
	}
	public void setContentId(int contentId) {
		this.contentId = contentId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getOverview() {
		return overview;
	}
	public void setOverview(String overview) {
		this.overview = overview;
	}
	public BigDecimal getLatitude() {
		return latitude;
	}
	public void setLatitude(BigDecimal latitude) {
		this.latitude = latitude;
	}
	public BigDecimal getLongitude() {
		return longitude;
	}
	public void setLongitude(BigDecimal longitude) {
		this.longitude = longitude;
	}
	
	
}
