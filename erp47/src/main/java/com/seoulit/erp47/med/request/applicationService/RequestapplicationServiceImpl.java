package com.seoulit.erp47.med.request.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.request.dao.RequestDAO;
import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

@Component
public class RequestapplicationServiceImpl implements RequestapplicationService{

	@Autowired
	private RequestDAO requestDAO;
	
	@Override
	public List<CfrnTrmtBean> findCfrnTrmt(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return requestDAO.findCfrnTrmt(argsMap);
	}

	@Override
	public void batchCfrnTrmtList(List<CfrnTrmtBean> batchCfrnList) {
		// TODO Auto-generated method stub
		
		for(CfrnTrmtBean cfrnTrmtBean : batchCfrnList){
			
			
				if(cfrnTrmtBean.getStatus()=="inserted"){
					
					requestDAO.insertCfrnTrmt(cfrnTrmtBean);
					
				}else if(cfrnTrmtBean.getStatus()=="deleted"){
					
					
					
					
				}else if(cfrnTrmtBean.getStatus()=="updated"){
					
					
					
				}
			
			
		}
		
	}

}
