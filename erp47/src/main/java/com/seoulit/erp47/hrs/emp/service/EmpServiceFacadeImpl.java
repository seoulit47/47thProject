package com.seoulit.erp47.hrs.emp.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.hrs.emp.applicationService.EmpApplicationService;
import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.service
 * @Class    EmpServiceFacadeImpl.java
 * @Create   2016. 08. 28.
 * @Author   Hwanee
 * @Description
 *
 * @LastUpdated
 */

@Service
public class EmpServiceFacadeImpl implements EmpServiceFacade {

	@Autowired
	EmpApplicationService empApplicationService;
	
	//사원목록검색
	@Override
	public List<EmpBean> findEmpList(Map<String, String> argsMap) {
		return empApplicationService.findEmpList(argsMap);
	}

	


}


