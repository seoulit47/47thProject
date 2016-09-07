package com.seoulit.erp47.med.request.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.request.applicationService.RequestapplicationService;
import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

@Service
public class RequestServiceFacadeImpl implements RequestServiceFacade{

	@Autowired
	private RequestapplicationService requestapplicationService;
	
	@Override
	public List<CfrnTrmtBean> findCfrnTrmt(Map<String, String> argsMap) {

		return requestapplicationService.findCfrnTrmt(argsMap);
	}

}
