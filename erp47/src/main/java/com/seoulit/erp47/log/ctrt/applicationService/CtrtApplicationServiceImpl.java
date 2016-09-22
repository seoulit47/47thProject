package com.seoulit.erp47.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.ctrt.dao.CtrtDAO;
import com.seoulit.erp47.log.ctrt.to.CtrtBean;

@Component
public class CtrtApplicationServiceImpl implements CtrtApplicationService{

	@Autowired
	CtrtDAO ctrtDAO;
	@Override
	public List<CtrtBean> findCtrtList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return ctrtDAO.findCtrtList(argsMap);
	}

}
