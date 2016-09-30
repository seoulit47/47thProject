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
	
		return codeDAO.selectCodeList(argsMap);
	}


	@Override
	public List<CodeNmBean> findCode(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return codeDAO.findCode(argsMap);
	}


	@Override
	public void  batchCode(List<CodeBean> batchCodeList) {
		// TODO Auto-generated method stub
		
			for(CodeBean codebean : batchCodeList){
				
					if(codebean.getStatus().equals("inserted")){
						codeDAO.insertCode(codebean);
				
							
					}
					
					else if(codebean.getStatus().equals("deleted")){

						codeDAO.deleteCode(codebean);
						
					}
					else if(codebean.getStatus().equals("updated")){
						
						codeDAO.updateCode(codebean);
						
					}
					
				
			}
		
	}


	@Override
	public List<CodeNmBean> findCodePopupList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return codeDAO.findCodePopupList(argsMap);
	}

}
