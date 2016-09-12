package com.seoulit.erp47.log.base.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.base.dao.CustDAO;
import com.seoulit.erp47.log.base.dao.WhDAO;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
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
					
							if(bindLogCdBean.getCdDiv().equals("cust")){
								Map<String,String>argsMap=setArgsMap(bindLogCdBean);
								bindLogCdMap.put(bindLogCdBean.getDsLogName(), custDAO.selectBindCustCdList(argsMap));
								
							}else if(bindLogCdBean.getCdDiv().equals("wh")){
								
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

}
