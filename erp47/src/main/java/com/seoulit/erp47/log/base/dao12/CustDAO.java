package com.seoulit.erp47.log.base.dao12;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.CustBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;

public interface CustDAO {

	
		public List<OutLogCdBean>selectBindCustCdList(Map<String,String>argsMap) ;
		public List<CustBean>findCustList(Map<String,String>argsMap);
		
		public void insertCustList(CustBean custBean);
		public void updateCustList(CustBean custBean);
	
}
