package com.seoulit.erp47.hrs.salBase.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.salBase.to.SalStandardSetBean;

public interface SalStandardSetDAO {
    
    public List<SalStandardSetBean> findSalStandardList() throws DataAccessException;

    public void insertSalStanSet(SalStandardSetBean salStanBean) throws DataAccessException;
    public void updateSalStanSet(SalStandardSetBean salStanBean) throws DataAccessException;

}
