package com.seoulit.erp47.won.baseInfo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.baseInfo.applicationService.FeeApplicationService;
import com.seoulit.erp47.won.baseInfo.to.FeeBean;


@Service
public class BaseServiceFacadeImpl implements BaseServiceFacade{

	@Autowired
	FeeApplicationService feeApplicationService;
	
	@Override
	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return feeApplicationService.findFeeListEMR(argsMap);
	}

	
	
	
}
