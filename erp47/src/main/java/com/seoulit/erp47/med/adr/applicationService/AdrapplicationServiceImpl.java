package com.seoulit.erp47.med.adr.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.adr.dao.AdrDAO;
import com.seoulit.erp47.med.adr.to.AdrBean;

@Component
public class AdrapplicationServiceImpl implements AdrapplicationService{

	@Autowired
	AdrDAO adrDAO;
	
	@Override
	public List<AdrBean> findAdrList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return adrDAO.findAdrList(argsMap);
	}

	
}
