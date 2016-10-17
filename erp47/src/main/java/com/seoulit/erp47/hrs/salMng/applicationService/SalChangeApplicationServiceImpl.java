package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.hrs.salMng.dao.SalChangeDAO;
import com.seoulit.erp47.hrs.salMng.to.SalChangeBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangeEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangePayDeduBean;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.applicationService
 * @Class    SalChangeApplicationServiceImpl.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 */

@Component
public class SalChangeApplicationServiceImpl implements SalChangeApplicationService{

	@Autowired
	public SalChangeDAO salChangeDAO;
	
	/* 급/상여변동현황 */
	@Override
	public List<SalChangeBean> findSalChangeList(Map<String, String> argsMap) {
		return salChangeDAO.findSalChangeList(argsMap);
	}

	@Override
	public List<SalChangeEmpBean> findSalEmpList(Map<String, String> argsMap) {
		return salChangeDAO.findSalEmpList(argsMap);
	}

	@Override
	public List<SalChangePayDeduBean> findPayDeduList(Map<String, String> argsMap) {
		return salChangeDAO.findPayDeduList(argsMap);
	}	
}
