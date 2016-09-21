package com.seoulit.erp47.acc.elementary.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.applicationService.AccElementaryApplicationService;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;

@Service
public class AccElementaryServiceFacadeImpl implements AccElementaryServiceFacade{

    @Autowired
    AccElementaryApplicationService accElementaryApplicationService;
    
    
    @Override
    public List<AccAcntBean> findAccAcntList(Map<String, String> argsMap) {
        return accElementaryApplicationService.findAccAcntList(argsMap);
    }


	@Override
	public List<AssiSubBean> findAssiSubList(Map<String, String> argsMap) {
		return accElementaryApplicationService.findAssiSubList(argsMap);
	}
	
	@Override
	public List<AccPridBean> findAccPridList() {
	    return accElementaryApplicationService.findAccPridList();
	}


}
