package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;

public interface CodeApplicationService {

	
	
		public List<CodeBean>findCodeList(Map<String,String>argsMap);//코드조회
		public List<CodeNmBean>findCode(Map<String,String>argsMap);//subCode에따른 코드조회
		public void batchCode(List<CodeBean>batchCodeList);
}
