package com.seoulit.erp47.won.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.HealthInsurBean;

public interface HealthInsurApplicationService {
	
	public List<HealthInsurBean> findHealthInsurList(Map<String, String> argsMap);

	public void batchHealthInsurProcess(List<HealthInsurBean> healthInsurList);
	
}