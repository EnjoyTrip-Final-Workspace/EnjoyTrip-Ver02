package com.ssafy.vue.model.service;

import java.util.HashMap;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.model.MemberDto;
import com.ssafy.vue.model.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {
	
	private MemberMapper memberMapper;
	
	public MemberServiceImpl(MemberMapper memberMapper) {
		super();
		this.memberMapper = memberMapper;
	}

	@Autowired
	private SqlSession sqlSession;

	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {
		if (memberDto.getUserid() == null || memberDto.getUserpwd() == null)
			return null;
		return sqlSession.getMapper(MemberMapper.class).login(memberDto);
	}

	@Override
	public MemberDto userInfo(String userid) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).userInfo(userid);
	}

	@Override
	public void saveRefreshToken(String userid, String refreshToken) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userid", userid);
		map.put("token", refreshToken);
		sqlSession.getMapper(MemberMapper.class).saveRefreshToken(map);
	}

	@Override
	public Object getRefreshToken(String userid) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).getRefreshToken(userid);
	}

	@Override
	public void deleRefreshToken(String userid) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userid", userid);
		map.put("token", null);
		sqlSession.getMapper(MemberMapper.class).deleteRefreshToken(map);
	}

	@Override
	public boolean signUp(MemberDto memberDto) throws Exception {
		try {
			// 회원 가입 로직을 구현하세요.
			// memberMapper를 사용하여 회원 정보를 데이터베이스에 저장하고, 결과를 반환합니다.
			memberMapper.signUp(memberDto); // 회원 정보 저장
			return true; // 회원 가입 성공
		} catch (Exception e) {
			// 예외 발생 시 처리 로직을 구현하세요.
			// 필요에 따라 로깅하거나 예외를 던지는 등의 작업을 수행합니다.
			return false; // 회원 가입 실패
		}
	
	}

	@Override
	public boolean deleteMember(String userid) throws Exception {
		try {
			memberMapper.deleteMember(userid);
			return true;
		} catch (Exception e) {
			return false;			
		}
	}

	@Override
	public boolean updateMember(MemberDto memberDto) {
		try {
			memberMapper.updateMember(memberDto);
			return true;
		} catch (Exception e) {
			return false;			
		}
	}


}
