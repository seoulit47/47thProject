package com.seoulit.erp47.com.base.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.com.base.to.ServiceBean;


public interface ServiceDAO {
    public List<ServiceBean> selectService(Map<String, String> argsMap);

    public void insertError(ServiceBean service) throws DataAccessException;
}
