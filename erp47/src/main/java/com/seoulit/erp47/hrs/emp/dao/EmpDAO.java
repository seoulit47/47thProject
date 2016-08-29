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
	List<EmpBean> selectEmpList(Map<String, String> argsMap);
}