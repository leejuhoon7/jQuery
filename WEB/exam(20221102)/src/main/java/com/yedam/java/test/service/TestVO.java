package com.yedam.java.test.service;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class TestVO {
	private int deptId;
	private List<String> nameList;
	private List<Map<String, Object>> dataList;
}
