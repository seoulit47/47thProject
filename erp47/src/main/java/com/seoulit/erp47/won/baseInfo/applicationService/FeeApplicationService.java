package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.FeeBean;

public interface FeeApplicationService {
	
	public List<FeeBean> findFeeList(Map<String, String> argsMap);

	public void batchFeeProcess(List<FeeBean> feeBeanList);

	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap);
	
}
