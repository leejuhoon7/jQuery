package com.yedam.java.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.java.todo.service.TodoVO;

public interface TodoMapper {
	
	//전체조회
	public List<TodoVO> getTodoAllList(int id);
	
	//등록
	public int TodoInsert(TodoVO todoVO);
	
	//수정 - 할일여부
	public int todoUpdate(TodoVO todoVO);
	
	//삭제
	public int todoDelete(@Param("id") int id, @Param("no") int no);
//	public int todoDelete(TodoVO todoVO);
	
}
