package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.OrdDAO;
import com.seoulit.erp47.med.base.to.OrdBean;

@Component
public class CautionApplicationServiceImpl implements CautionApplicationSerevice{

	@Autowired
	OrdDAO ordDAO;
	
	
	@Override
	public List<OrdBean> findOrdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return ordDAO.findOrdList(argsMap);
	}

}
