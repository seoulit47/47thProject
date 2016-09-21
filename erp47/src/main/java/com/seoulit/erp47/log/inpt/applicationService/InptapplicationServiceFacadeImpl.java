package com.seoulit.erp47.log.inpt.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.inpt.dao.InptDAO;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;

@Component
public class InptapplicationServiceFacadeImpl implements InptapplicationServiceFacade{

	@Autowired
	InptDAO inptDAO;
	
	@Override
	public List<CtrtInfoBean> findCtrtList() {
		// TODO Auto-generated method stub
		return inptDAO.findCtrtList();
	}

}
