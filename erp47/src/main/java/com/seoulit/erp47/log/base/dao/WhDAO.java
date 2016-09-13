package com.seoulit.erp47.log.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;

public interface WhDAO {

	
	
	public List<OutLogCdBean>selectBindWhList(Map<String,String>argsMap) ;
	public List<WhBean>findWhList(Map<String,String>argsMap);
}
