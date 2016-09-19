package com.seoulit.erp47.log.base.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.base.dao.CustDAO;
import com.seoulit.erp47.log.base.dao.WhDAO;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.CustBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;


@Component
public class LogBaseApplicationServiceImpl implements LogBaseApplicationService{

	@Autowired
	CustDAO custDAO;
	
	@Autowired
	WhDAO whDAO;
	
	
	@Override
	public Map<String, List<OutLogCdBean>> BindLogCd(List<BindLogCdBean> bindLogCdList) {
		// TODO Auto-generated method stub
			Map<String,List<OutLogCdBean>>bindLogCdMap = new HashMap<>();
			
			
				for(BindLogCdBean bindLogCdBean: bindLogCdList){
					
							if(bindLogCdBean.getCdDiv().equals("cust")){ //거래처
								Map<String,String>argsMap=setArgsMap(bindLogCdBean);
								bindLogCdMap.put(bindLogCdBean.getDsLogName(), custDAO.selectBindCustCdList(argsMap));
								
							}else if(bindLogCdBean.getCdDiv().equals("wh")){ //창고
								
								Map<String,String>argsMap=setArgsMap(bindLogCdBean);
								bindLogCdMap.put(bindLogCdBean.getDsLogName(), whDAO.selectBindWhList(argsMap));
								
							}
					
				}
	
		return bindLogCdMap;
	}

    private Map<String, String> setArgsMap(BindLogCdBean bindLogCdBean) {
        String code = bindLogCdBean.getCode();
        String cdNm = bindLogCdBean.getCdNm();
        Map<String, String> argsMap = new HashMap<String, String>();
        argsMap.put("code", code);
        argsMap.put("cdNm", cdNm);
        
        return argsMap;
    }

	@Override
	public List<WhBean> findWhList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		
		return whDAO.findWhList(argsMap);
	}

	@Override
	public void batchWhProcess(List<WhBean> batchWhList) {
		// TODO Auto-generated method stub
		
			for(WhBean whBean : batchWhList){
				
					if(whBean.getStatus().equals("inserted")){
						
						whDAO.insertWhList(whBean);
						
					}else if(whBean.getStatus().equals("updated")){
						
						whDAO.updateWhList(whBean);
					}
				
				
			}
		
		
	}

	@Override
	public List<CustBean> findCustList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return custDAO.findCustList(argsMap);
	}

	@Override
	public void batchCustProcess(List<CustBean> batchCustList) {
		// TODO Auto-generated method stub
		// bean 과 list 확장 for문
	
			for(CustBean custbean : batchCustList){
				
						if(custbean.getStatus().equals("inserted")){  //거래처 추가
							
								custDAO.insertCustList(custbean);
						
						}else if(custbean.getStatus().equals("deleted")){
							
							//  코드 팝업 끝내고 할 것 
							
						}else if(custbean.getStatus().equals("updated")){
							
							
							// 코드 팝업 끝내고 할 것 
						}
						
						
				
			}
		
		
	}



}
