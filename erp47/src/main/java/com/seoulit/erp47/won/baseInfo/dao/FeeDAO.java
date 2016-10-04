package com.seoulit.erp47.won.baseInfo.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.FeeBean;

public interface FeeDAO {

	
	List<FeeBean>findFeeListEMR(Map<String, String>argsMap);
	
}
