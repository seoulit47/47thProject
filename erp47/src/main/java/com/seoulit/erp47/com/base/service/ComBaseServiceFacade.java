package com.seoulit.erp47.com.base.service;

import java.util.Map;

import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;

public interface ComBaseServiceFacade {
    // 로그인
    public Map<String, Object> login(Map<String, String> argsMap) throws IdNotFoundException, PwMissMatchException;
    public Map<String, Object> checkAuth(Map<String, String> authMap) throws IdNotFoundException, PwMissMatchException; 
}
