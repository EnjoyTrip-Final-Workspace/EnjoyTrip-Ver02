package com.ssafy.vue.model.service;

import org.springframework.stereotype.Service;

import com.ssafy.vue.model.Plan;
import com.ssafy.vue.model.mapper.PlanMapper;

@Service
public class PlanServiceImpl implements PlanService{

	private PlanMapper planMapper;
	
	public PlanServiceImpl(PlanMapper planMapper) {
		super();
		this.planMapper = planMapper;
	}

	// 계획 등록
	@Override
	public boolean addPlan(Plan plan) throws Exception {
		try {
			planMapper.addPlan(plan);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
}

