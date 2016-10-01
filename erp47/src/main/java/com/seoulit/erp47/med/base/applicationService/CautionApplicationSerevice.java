package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.OrdBean;

public interface CautionApplicationSerevice {

		List<OrdBean>findOrdList(Map<String,String>argsMap);
	
}
