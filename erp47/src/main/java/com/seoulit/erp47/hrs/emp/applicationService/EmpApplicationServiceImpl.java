package com.seoulit.erp47.hrs.emp.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.hrs.emp.dao.EmpDAO;
import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.applicationService
 * @Class    EmpApplicationServiceImpl.java
 * @Create   2016. 08. 28.
 * @Author   Hwanee
 * @Description
 *			사원 AS_Impl
 * @LastUpdated
 */

@Service
public class EmpApplicationServiceImpl implements EmpApplicationService {
	@Autowired
	EmpDAO empDAO;
	
	@Override
	public List<EmpBean> findEmpList(Map<String, String> argsMap) {
		return empDAO.selectEmpList(argsMap);
	}
	

}