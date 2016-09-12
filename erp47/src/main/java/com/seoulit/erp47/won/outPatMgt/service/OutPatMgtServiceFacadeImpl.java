package com.seoulit.erp47.won.outPatMgt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.outPatMgt.applicationService.OutPatMgtApplicationService;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;

/**
 * @Package  com.seoulit.erp47.won.outPatMgt.service
 * @Class    OutPatMgtServiceFacadeImpl.java
 * @Create   2016. 09. 11.
 * @Author   김진환
 * @Description
 *
 * @LastUpdated
 */

@Service
public class OutPatMgtServiceFacadeImpl implements OutPatMgtServiceFacade {
	@Autowired
	OutPatMgtApplicationService outPatMgtApplicationService; 
	
	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return outPatMgtApplicationService.findPatList(argsMap);
	}
	
	@Override
    public PatInfoBean findPat(Map<String, String> argsMap) {
        return outPatMgtApplicationService.findPat(argsMap);
    }
}
