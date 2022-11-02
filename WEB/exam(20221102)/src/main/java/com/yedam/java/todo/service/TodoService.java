package com.yedam.java.todo.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface TodoService {
	
		//전체조회
		public List<TodoVO> getTodoAllList(TodoVO todoVO);
		
		//등록
		public int TodoInsert(TodoVO todoVO);
		
		//수정 - 할일여부
		public int todoUpdate(TodoVO todoVO);
		
		//삭제
		public int todoDelete(TodoVO todoVO);
//		public int todoDelete(TodoVO todoVO);
}
