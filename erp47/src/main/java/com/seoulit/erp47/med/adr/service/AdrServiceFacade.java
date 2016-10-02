package com.seoulit.erp47.med.adr.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.adr.to.AdrBean;

@Service
public interface AdrServiceFacade {

			List<AdrBean>findAdrList(Map<String,String>argsMap);
	
	
}
