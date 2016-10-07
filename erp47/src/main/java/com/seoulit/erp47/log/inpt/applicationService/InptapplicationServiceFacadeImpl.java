package com.seoulit.erp47.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.inpt.dao.InptDAO;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;

@Component
public class InptapplicationServiceFacadeImpl implements InptapplicationServiceFacade{

	@Autowired
	InptDAO inptDAO;
	
	@Override
	public List<CtrtInfoBean> findCtrtList(Map<String, String> argsMap) {
		return inptDAO.selectCtrtList(argsMap);
	}
	
	@Override
	public List<CtrtInfoDetailBean> findCtrtDetailList(Map<String, String> argsMap) {
		return inptDAO.selectCtrtDetailList(argsMap);
	}

	@Override
	public List<GdsInptBean> findGdsInpt(Map<String, String> argsMap) {
		return inptDAO.selectGdsInpt(argsMap);
	}

}
