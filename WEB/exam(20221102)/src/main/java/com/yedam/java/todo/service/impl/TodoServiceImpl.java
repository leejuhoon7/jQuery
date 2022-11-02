package com.yedam.java.todo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yedam.java.todo.mapper.TodoMapper;
import com.yedam.java.todo.service.TodoService;
import com.yedam.java.todo.service.TodoVO;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	TodoMapper todoMap;
	
	@Override
	public List<TodoVO> getTodoAllList(TodoVO todoVO) {
		return todoMap.getTodoAllList(todoVO.getId());
	}

	@Override
	public int TodoInsert(TodoVO todoVO) {
		return todoMap.TodoInsert(todoVO);
	}

	@Override
	public int todoUpdate(TodoVO todoVO) {
		return todoMap.todoUpdate(todoVO);
	}

	@Override
	public int todoDelete(TodoVO todoVO) {
		return todoMap.todoDelete(todoVO.getId(), todoVO.getNo());
	}

}
