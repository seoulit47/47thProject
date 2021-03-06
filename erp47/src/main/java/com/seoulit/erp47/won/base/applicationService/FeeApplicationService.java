package com.seoulit.erp47.won.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.FeeBean;

public interface FeeApplicationService {
	
	public List<FeeBean> findFeeList(Map<String, String> argsMap);

	public void batchFeeProcess(List<FeeBean> feeBeanList);

	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap);
	
}
