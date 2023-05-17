package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.BoardDto;
import com.ssafy.vue.model.BoardParameterDto;

//Spring Boot와 MyBatis를 사용하는 환경에서 Board에 관련된 데이터베이스 작업을 처리하는 Mapper 인터페이스
@Mapper //해당 인터페이스가 MyBatis의 Mapper 역할을 수행한다는 의미
public interface BoardMapper {
	
	// 게시글을 작성하는 메서드
	// BoardDto 객체를 매개변수로 받아 게시글을 데이터베이스에 추가한다. 작성된 게시글의 개수를 반환한다.
	public int writeArticle(BoardDto boardDto) throws SQLException;

	// 게시글 목록을 조회하는 메서드
	// BoardParameterDto 객체를 매개변수로 받아 게시글의 목록을 조회
	// 조회된 게시글 목록을 BoardDto 객체의 리스트로 반환
	public List<BoardDto> listArticle(BoardParameterDto boardParameterDto) throws SQLException;

	// 게시글의 총 개수를 조회하는 메서드
	// BoardParameterDto 객체를 매개변수로 받아 게시글의 총 개수를 반환
	public int getTotalCount(BoardParameterDto boardParameterDto) throws SQLException;

	// 특정 게시글을 조회하는 메서드
	// 게시글 번호(articleno)를 매개변수로 받아 해당 게시글을 조회하여 BoardDto 객체로 반환
	public BoardDto getArticle(int articleno) throws SQLException;

	// 게시글의 조회수를 증가시키는 메서드
	// 게시글 번호(articleno)를 매개변수로 받아 해당 게시글의 조회수를 증가
	public void updateHit(int articleno) throws SQLException;

	// 게시글을 수정하는 메서드
	// BoardDto 객체를 매개변수로 받아 해당 게시글을 데이터베이스에서 수정합니다. 수정된 게시글의 개수를 반환
	public int modifyArticle(BoardDto boardDto) throws SQLException;

	// 특정 게시글의 댓글을 삭제하는 메서드
	// 게시글 번호(articleno)를 매개변수로 받아 해당 게시글의 댓글을 삭제
	public void deleteMemo(int articleno) throws SQLException;

	// 게시글을 삭제하는 메서드
	// 게시글 번호(articleno)를 매개변수로 받아 해당 게시글을 데이터베이스에서 삭제
	// 삭제된 게시글의 개수를 반환
	public int deleteArticle(int articleno) throws SQLException;
}