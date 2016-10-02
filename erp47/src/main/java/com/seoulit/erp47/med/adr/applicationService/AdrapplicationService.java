package com.seoulit.erp47.med.adr.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.adr.to.AdrBean;

public interface AdrapplicationService {

		List<AdrBean>findAdrList(Map<String,String>argsMap);
	
}
