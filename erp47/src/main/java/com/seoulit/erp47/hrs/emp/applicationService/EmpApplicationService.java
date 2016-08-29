package com.seoulit.erp47.hrs.emp.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.emp.to.EmpBean;


/**
 * 
 * @Package  com.seoul.his.hrs.emp.applicationService
 * @Class    EmpApplicationService.java
 * @Create   2016. 08. 28.
 * @Author   Hwanee
 * @Description
 *			사원 AS
 * @LastUpdated
 */

public interface EmpApplicationService {
	List<EmpBean> findEmpList(Map<String, String> argsMap);
}


