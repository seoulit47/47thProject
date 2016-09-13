package com.seoulit.erp47.log.base.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;



public interface LogBaseServiceFacade {

	
	
			public Map<String,List<OutLogCdBean>> BindLogCd(List<BindLogCdBean>bindLogCdList);
			public List<WhBean>findWhList(Map<String,String>argsMap);
	
}
