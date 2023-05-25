package com.ssafy.vue.model.service;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Plan;

import java.util.List;

public interface PlanService {
    public boolean addPlan(List<Plan> plan) throws Exception;

    public boolean deletePlan(String userId, int contentId) throws Exception;

    public List<Attraction> getPlan(String userid) throws Exception;

    // 중복체크 추가
	public boolean checkDuplicate(String userid, int content_id);

}
