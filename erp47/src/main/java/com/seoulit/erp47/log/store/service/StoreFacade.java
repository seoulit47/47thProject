package com.seoulit.erp47.log.store.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.store.to.PrcsWhsBean;
import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

public interface StoreFacade {

	
		public List<PrcsWhsBean>findPrcsWhsList(Map<String, String>argsMap);
		public List<PrcsWhsHistBean>findPrcsWhsHistList(Map<String,String>argsMap);
		
}
