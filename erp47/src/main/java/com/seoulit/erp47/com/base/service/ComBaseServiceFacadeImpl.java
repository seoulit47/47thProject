package com.seoulit.erp47.com.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.com.base.applicationService.CodeApplicationService;
import com.seoulit.erp47.com.base.applicationService.LoginApplicationService;
import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;

/**
 * @Package  	com.seoulit.erp47.com.base.service
 * @Class    	ComBaseServiceFacadeImpl.java
 * @Create   	2016. 08. 26.
 * @Author   
 * @Description 시스템공통 서비스퍼사드
 *
 * @LastUpdated 
 */
@Service
public class ComBaseServiceFacadeImpl implements ComBaseServiceFacade {

    @Autowired
    private LoginApplicationService loginApplicationService;
    @Autowired
    private CodeApplicationService codeApplicationService;
   
    // 로그인
    @Override
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException {
        return loginApplicationService.login(argsMap);
    }

	@Override

	public List<CodeBean> findCodeList(Map<String, String> argsMap) {
		
		return codeApplicationService.findCodeList(argsMap);
	}

	@Override
	public List<CodeNmBean> findCode(Map<String, String> argsMap) {
		
		return codeApplicationService.findCode(argsMap);
	}
	public Map<String, Object> checkAuth(Map<String, String> authMap) throws IdNotFoundException, PwMissMatchException {
		System.out.println("test ~ serviceFacade~");
		return null;

	}

	@Override
	public void  batchCode(List<CodeBean> batchCodeList) {
		// TODO Auto-generated method stub
		codeApplicationService.batchCode(batchCodeList);
	}

}
