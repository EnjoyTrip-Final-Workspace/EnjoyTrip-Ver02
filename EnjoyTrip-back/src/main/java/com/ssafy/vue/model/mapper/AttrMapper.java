package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Search;
import com.ssafy.vue.model.Sido;
import com.ssafy.vue.model.gugun;


@Mapper
public interface AttrMapper {

	List<Attraction> selectAttr(Search search) throws SQLException;

	Attraction selectAttrById(String contentId) throws SQLException;

	List<Sido> selectSido() throws SQLException;

	List<gugun> selectGugun(int code) throws SQLException;

	List<Attraction> selectAttrByKeyword(String keyword) throws SQLException;

    List<Attraction> selectRandomAttractions() throws SQLException;
}
