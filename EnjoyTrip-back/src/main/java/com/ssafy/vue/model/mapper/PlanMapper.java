package com.ssafy.vue.model.mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.Plan;

@Mapper
public interface PlanMapper {

	public void addPlan(Plan plan) throws SQLException; 
}
