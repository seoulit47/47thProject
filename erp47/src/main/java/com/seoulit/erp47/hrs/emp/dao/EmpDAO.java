package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.common.to.BaseBean;
import com.seoulit.erp47.hrs.appoint.to.AppointDetailBean;
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

	List<EmpBean> selectEmpList(Map<String, String> argsMap);

	void insertEmp(BaseBean empBean);

	void updateEmp(BaseBean empBean);

	void deleteEmp(BaseBean empBean);
	
	void appointEmp(AppointDetailBean appointDetailBean);
	
	List<EmpBean> selectRetireeList(Map<String, String> argsMap);

	void updateLoginTimeIp(Map<String, String> argsMap);
	
}