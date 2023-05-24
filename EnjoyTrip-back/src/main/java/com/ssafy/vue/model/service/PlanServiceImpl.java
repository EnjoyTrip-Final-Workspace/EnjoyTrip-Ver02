package com.ssafy.vue.model.service;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.mapper.BoardMapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.model.Plan;
import com.ssafy.vue.model.mapper.PlanMapper;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService{

	private PlanMapper planMapper;

	public PlanServiceImpl(PlanMapper planMapper) {
		super();
		this.planMapper = planMapper;
	}
//	@Autowired
//	private SqlSession sqlSession;

	@Override
	public boolean addPlan(List<Plan> plan) throws Exception {
		try {
			for (Plan p : plan ) {
				planMapper.addPlan(p);
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}


	@Override
	public boolean deletePlan(String userid, int content_id) {
		try {
			Plan plan = new Plan();
			plan.setUserid(userid);
			plan.setContent_id(content_id);
			planMapper.deletePlan(plan);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<Attraction> getPlan(String userid) throws Exception {
		return planMapper.getPlan(userid);
	}

//	@Override
//	public Attraction getPlan(String userid) throws Exception {
//		return (Attraction) planMapper.getPlan(userid);
//	}



}

