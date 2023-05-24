package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.vue.model.Attraction;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.Plan;

@Mapper
public interface PlanMapper {

	public void addPlan(Plan plan) throws SQLException;

    public void deletePlan(Plan plan) throws SQLException;

//    public Attraction getPlan(String userid) throws SQLException;

    public List<Attraction> getPlan(String userid) throws SQLException;

}
