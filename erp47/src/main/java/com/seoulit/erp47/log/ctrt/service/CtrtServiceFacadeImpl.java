package com.seoulit.erp47.log.ctrt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.ctrt.applicationService.CtrtApplicationService;
import com.seoulit.erp47.log.ctrt.to.CtrtBean;


@Service
public class CtrtServiceFacadeImpl implements CtrtServiceFacade{

	@Autowired
	CtrtApplicationService ctrtApplicationService;
	
	
	@Override
	public List<CtrtBean> findCtrtList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return ctrtApplicationService.findCtrtList(argsMap);
	}

}
