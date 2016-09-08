package com.seoulit.erp47.med.request.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

public interface RequestServiceFacade {

	
public List<CfrnTrmtBean>findCfrnTrmt(Map<String,String>argsMap);
public void batchCfrnTrmtList(List<CfrnTrmtBean>batchCfrnList);	
}
