package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.com.base.dao.CodeDAO;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;

@Component
public class CodeApplicationServiceImpl implements CodeApplicationService{

	@Autowired
	CodeDAO codeDAO;
	
	
	@Override
	public List<CodeBean> findCodeList(Map<String, String> argsMap) {
	
		return codeDAO.findCodeList(argsMap);
	}


	@Override
	public List<CodeNmBean> findCode(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return codeDAO.findCode(argsMap);
	}

}
