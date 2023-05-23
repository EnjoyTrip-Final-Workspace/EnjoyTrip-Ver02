package com.ssafy.vue.model.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Search;
import com.ssafy.vue.model.Sido;
import com.ssafy.vue.model.gugun;
import com.ssafy.vue.model.mapper.AttrMapper;

@Service
public class AttrServiceImpl implements AttrService {
	private AttrMapper attrMapper;
	
	public AttrServiceImpl(AttrMapper attrMapper) {
		this.attrMapper = attrMapper;
	}
	
	@Override
	public List<Attraction> search(Search search) throws Exception {
		return attrMapper.selectAttr(search);
	}

	@Override
	public Attraction detail(String contentId) throws Exception {
		return attrMapper.selectAttrById(contentId);
	}

	@Override
	public List<gugun> getGugun(int code) throws Exception {
		return attrMapper.selectGugun(code);
	}

	@Override
	public List<Sido> getSido() throws Exception {
		return attrMapper.selectSido();
	}

	@Override
	public List<Attraction> searchByKeyword(String keyword) throws Exception {
		return attrMapper.selectAttrByKeyword(keyword);
	}

	@Override
	public List<Attraction> getRandomAttractions() throws Exception {
		return attrMapper.selectRandomAttractions();
	}

}
