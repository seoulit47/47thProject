package com.seoulit.erp47.hrs.salBase.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.salBase.to.SocialInsureBean;

public interface SocialInsureDAO {
    
    public List<SocialInsureBean> findsocialInsureList(Map<String, String> argsMap)
            throws DataAccessException;
    public void insertSocialInsure(Map<String, String> argsMap) throws DataAccessException;

}
