package com.seoulit.erp47.won.outPatMgt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;



public interface OutPatMgtApplicationService {

	public List<PatInfoBean> findPatList(Map<String, String> argsMap);
	public PatInfoBean findPat(Map<String, String> argsMap);
	/*

    public void modifyPat(Map<String, Object> map);

    public void registerPat(Map<String, Object> map);

    public PatInfoBean findLastPatNo();

    public List<CheckInfoBean> findCheckList(Map<String, String> argsMap);

    public void batchCheckProcess(Map<String, Object> map);*/
}
