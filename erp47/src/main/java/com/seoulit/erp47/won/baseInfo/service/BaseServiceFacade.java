package com.seoulit.erp47.won.baseInfo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.baseInfo.to.FeeBean;

@Service
public interface BaseServiceFacade {

	
	List<FeeBean>findFeeListEMR(Map<String, String>argsMap);
	
}
