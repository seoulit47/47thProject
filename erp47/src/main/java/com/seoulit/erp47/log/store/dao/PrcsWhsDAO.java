package com.seoulit.erp47.log.store.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.store.to.PrcsWhsBean;
import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

public interface PrcsWhsDAO {

	
	
		public List<PrcsWhsBean>findPrcsWhsList(Map<String, String>argsMap);
		public void updatePrcsWhs(PrcsWhsBean prcsWhsBean);
}
