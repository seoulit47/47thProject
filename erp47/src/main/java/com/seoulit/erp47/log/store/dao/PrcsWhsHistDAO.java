package com.seoulit.erp47.log.store.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

public interface PrcsWhsHistDAO {

	
	public List<PrcsWhsHistBean>findPrcsWhsHistList(Map<String,String>argsMap);
}
