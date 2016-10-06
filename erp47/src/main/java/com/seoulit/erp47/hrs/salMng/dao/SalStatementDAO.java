package com.seoulit.erp47.hrs.salMng.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.salMng.to.SalCalEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalStatmPDFBean;

public interface SalStatementDAO {
    
    /*급여명세*/
    List<SalCalEmpBean> findSalCalEmpList(Map<String, String> argsMap) throws DataAccessException;
    List<SalStatmPDFBean> findSalStatmEmp(Map<String, String> argsMap) throws DataAccessException;

}
