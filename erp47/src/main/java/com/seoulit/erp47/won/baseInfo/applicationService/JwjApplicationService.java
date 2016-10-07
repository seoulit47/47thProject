package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.JwjBean;


public interface JwjApplicationService {
	
    public List<JwjBean> findJwjList(Map<String, String> argsMap);
    
}