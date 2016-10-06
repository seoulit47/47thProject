package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.hrs.salMng.dao.SalStatementDAO;
import com.seoulit.erp47.hrs.salMng.dao.SalTransfDAO;
import com.seoulit.erp47.hrs.salMng.to.SalCalEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalStatmPDFBean;
import com.seoulit.erp47.hrs.salMng.to.SalTransfBean;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.applicationService
 * @Class    SalTransferApplicationServiceImpl.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 */

@Component
public class SalTransferApplicationServiceImpl implements SalTransferApplicationService{

	@Autowired
	public SalStatementDAO salStatmDAO;

	@Autowired
	public SalTransfDAO salTransfDAO;
	
	@Override
	public List<SalCalEmpBean> findSalCalEmpList(Map<String, String> argsMap) {
		return salStatmDAO.findSalCalEmpList(argsMap);
	}

	@Override
	public List<SalStatmPDFBean> findSalStatmEmp(Map<String, String> argsMap) {
		return salStatmDAO.findSalStatmEmp(argsMap);
	}
		
	@Override
	public List<SalTransfBean> findSalTransfList(Map<String, String> argsMap) {
		return salTransfDAO.findSalTransfList(argsMap);
	}
	
}
