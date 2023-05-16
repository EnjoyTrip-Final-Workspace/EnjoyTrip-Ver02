package com.ssafy.vue.model.service;

import java.util.List;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Search;
import com.ssafy.vue.model.Sido;
import com.ssafy.vue.model.gugun;


public interface AttrService {
	
	List<Attraction> search(Search search) throws Exception;

	Attraction detail(String contentId) throws Exception;

	List<Sido> sido() throws Exception;

	List<gugun> getGugun(int code) throws Exception;

	// 0516 시도추가
	List<Sido> getSido() throws Exception;



}
