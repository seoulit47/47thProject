package com.seoulit.erp47.med.adr.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.adr.applicationService.AdrapplicationService;
import com.seoulit.erp47.med.adr.to.AdrBean;
@Service
public class AdrServiceFacadeImpl implements AdrServiceFacade{

	@Autowired
	AdrapplicationService adrApplicationService;
	
	
	@Override
	public List<AdrBean> findAdrList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
	return adrApplicationService.findAdrList(argsMap);
	}

}
