package com.seoulit.erp47.med.request.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

public interface RequestapplicationService {

	
	public List<CfrnTrmtBean> findCfrnTrmt(Map<String, String> argsMap); 
	
}
