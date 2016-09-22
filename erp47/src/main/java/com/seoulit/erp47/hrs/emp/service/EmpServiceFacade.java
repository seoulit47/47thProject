package com.seoulit.erp47.hrs.emp.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.service
 * @Class    EmpServiceFacade.java
 * @Create   2016. 08. 28.
 * @Author   hwanee
 * @Description
 *			 사원 ServiceFacade
 * @LastUpdated
 * 			2016. 6. 5.
 */

public interface EmpServiceFacade {
 
	List<EmpBean> findEmpList(Map<String, String> argsMap);

	List<EmpBean> selectEmpList();

}
