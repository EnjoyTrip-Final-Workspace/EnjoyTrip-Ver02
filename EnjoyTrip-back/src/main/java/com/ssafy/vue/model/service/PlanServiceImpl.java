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

	// 데이터중복체크
	@Override
	public boolean checkDuplicate(String userid, int content_id) {
		 // 중복 체크를 위해 데이터베이스에 쿼리를 실행하여 결과를 반환하는 로직을 구현

		Plan plan = new Plan();
		plan.setUserid(userid);
		plan.setContent_id(content_id);
	    // 예시: 데이터베이스에서 해당 userid와 content_id를 가진 데이터가 이미 존재하는지 확인하는 쿼리를 실행
	    int count = planMapper.countByUserIdAndContentId(plan);

	    return count > 0; // 결과가 0보다 크면 중복 데이터가 존재
	}

//	@Override
//	public Attraction getPlan(String userid) throws Exception {
//		return (Attraction) planMapper.getPlan(userid);
//	}



}

