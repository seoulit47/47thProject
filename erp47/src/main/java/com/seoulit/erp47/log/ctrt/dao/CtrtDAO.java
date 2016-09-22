package com.seoulit.erp47.log.ctrt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.ctrt.to.CtrtBean;

public interface CtrtDAO {

	public List<CtrtBean> findCtrtList(Map<String, String> argsMap);
	
}
