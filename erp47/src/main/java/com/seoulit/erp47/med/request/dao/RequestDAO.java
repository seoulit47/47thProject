package com.seoulit.erp47.med.request.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

public interface RequestDAO {

	
	public List<CfrnTrmtBean> findCfrnTrmt(Map<String, String> argsMap);
	public void insertCfrnTrmt(CfrnTrmtBean cfrnTrmtBean);
	public void deleteCfrnTrmt(CfrnTrmtBean cfrnTrmtBean);
	public void updateCfrnTrmt(CfrnTrmtBean cfrnTrmtBean);
}
