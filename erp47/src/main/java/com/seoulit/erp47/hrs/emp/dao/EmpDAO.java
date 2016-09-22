package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * 
 * @Package 	com.seoulit.erp47.hrs.emp.dao
 * @Class 		EmpDAO.java
 * @Create 		2016. . .
 * @Author		
 * @Description	
 *
 * @LastUpdated
 */

public interface EmpDAO {
	EmpBean selectEmp(Map<String, String> argsMap);
	
	List<EmpBean> findEmpList(Map<String, String> argsMap);
	
	List<EmpBean> selectEmpList();
	
	List<EmpBean> selectEmpList(Map<String, String> argsMap);
}