package com.seoulit.erp47.log.store.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.store.applicationService.StoreApplicationService;
import com.seoulit.erp47.log.store.to.PrcsWhsBean;
import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

@Service
public class StoreFacadeImpl implements StoreFacade{
	@Autowired
	StoreApplicationService storeApplicationService;
	@Override
	public List<PrcsWhsBean> findPrcsWhsList(Map<String, String> argsMap) { //구매입고정보조회
		// TODO Auto-generated method stub
		return storeApplicationService.findPrcsWhsList(argsMap);
	}
	@Override
	public List<PrcsWhsHistBean> findPrcsWhsHistList(Map<String, String> argsMap) { //구매입고내역조회
		// TODO Auto-generated method stub
		return storeApplicationService.findPrcsWhsHistList(argsMap);
	}

	
	
	
}
