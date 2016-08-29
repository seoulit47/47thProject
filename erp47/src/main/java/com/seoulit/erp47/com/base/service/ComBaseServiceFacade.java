package com.seoulit.erp47.com.base.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.to.CodeBean;

public interface ComBaseServiceFacade {
    // 로그인
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException;
    
    public List<CodeBean> findCodeList(Map<String,String> argsMap);
  
}
