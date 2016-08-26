package com.seoulit.erp47.com.base.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.com.base.applicationService.LoginApplicationService;
import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;

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
   
    // 로그인
    @Override
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException {
        return loginApplicationService.login(argsMap);
    }

}
