package com.seoulit.erp47.won.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.JwjBean;


public interface JwjApplicationService {
	
    public List<JwjBean> findJwjList(Map<String, String> argsMap);
    
}