package com.seoulit.erp47.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;

public interface CodeDAO {

	
		public List<CodeBean> findCodeList(Map<String,String>argsMap);
		public List<CodeNmBean> findCode(Map<String,String>argsMap);
		public void insertCode(CodeBean codeBean);
		public void deleteCode(CodeBean codeBean);
		public void updateCode(CodeBean codeBean);
		public List<CodeNmBean> findCodePopupList(Map<String,String>argsMap);
	
}
