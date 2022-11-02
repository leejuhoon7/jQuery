package com.yedam.java.test.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.yedam.java.test.service.TestVO;

@Controller
public class TestController {
		
	@GetMapping("test")
	public String testData(Model model) {
		TestVO testVO = new TestVO();
		testVO.setDeptId(100);
		List<String> nameList = new ArrayList<>();
		for(int i=0; i<10; i++) {
			nameList.add("testName" + i);
		}
		
		testVO.setNameList(nameList);
		
		Map<String, Object> datas = new HashMap<>();
		datas.put("state", 0);
		datas.put("location", "Seoul");
		List<Map<String, Object>> dataList = new ArrayList<>();
		dataList.add(datas);
		testVO.setDataList(dataList);
		
		model.addAttribute("test", testVO);
		
		return "test";
		
	}
}
