package com.seoulit.erp47.log.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.OutLogCdBean;

public interface CustDAO {

	
		public List<OutLogCdBean>selectBindCustCdList(Map<String,String>argsMap) ;

	
}
