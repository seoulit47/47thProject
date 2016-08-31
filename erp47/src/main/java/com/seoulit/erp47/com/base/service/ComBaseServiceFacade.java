package com.seoulit.erp47.com.base.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;

public interface ComBaseServiceFacade {
    // 로그인

    //코드조회
    public List<CodeBean> findCodeList(Map<String,String> argsMap);
    
  
    //subCode선택시  Code조회
    public List<CodeNmBean> findCode(Map<String,String> argsMap);

    public Map<String, Object> login(Map<String, String> argsMap) throws IdNotFoundException, PwMissMatchException;
    public Map<String, Object> checkAuth(Map<String, String> authMap) throws IdNotFoundException, PwMissMatchException; 

}
