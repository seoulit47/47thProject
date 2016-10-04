package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.BaseExamBean;

public interface BaseExamDAO {

	
		List<BaseExamBean>findBaseExamList(Map<String, String>argsMap);
	
}
