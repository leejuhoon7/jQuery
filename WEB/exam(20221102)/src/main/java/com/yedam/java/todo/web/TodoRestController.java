package com.yedam.java.todo.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yedam.java.todo.service.TodoService;
import com.yedam.java.todo.service.TodoVO;

@Controller
@CrossOrigin("*")
public class TodoRestController {
	
	
	@Autowired TodoService todoservice;
	
	//전체조회
	@GetMapping("todoSelect")
	@ResponseBody
	public List<TodoVO> todoSelect(TodoVO todoVO) {
		return todoservice.getTodoAllList(todoVO);
	}
	//등록
	@PostMapping("todoInsert")
	@ResponseBody
	public Map todoInsert(@RequestBody TodoVO todoVO) {
		int result = todoservice.TodoInsert(todoVO); //TodoInsert(@RequestBody TodoVO todoVO);
		Map<String, Object> resultVO = new HashMap<String, Object>();
		if( result > 0) {
			resultVO.put("result", "success");
			resultVO.put("count", result);
		} else {
			resultVO.put("result", "fail");
		}
		return resultVO;  
	}
	
	//수정
	@GetMapping("todoUpdate")
	@ResponseBody
	public TodoVO todoUpdate(TodoVO todoVO) {
		todoservice.todoUpdate(todoVO);
		return todoVO;
	}
	
	//삭제
	@GetMapping("todoDelete")
	@ResponseBody
	public TodoVO todoDelete(@RequestParam int id, @RequestParam int no) {
		TodoVO todoVO = new TodoVO();
		todoVO.setId(id);
		todoVO.setNo(no);
		todoservice.todoDelete(todoVO);
		return todoVO;
	}
	
}
