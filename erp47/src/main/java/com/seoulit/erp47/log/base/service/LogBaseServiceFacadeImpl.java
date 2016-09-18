package com.seoulit.erp47.log.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.base.applicationService.LogBaseApplicationService;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;
@Service
public class LogBaseServiceFacadeImpl implements LogBaseServiceFacade{
	
	@Autowired
	private LogBaseApplicationService logBaseApplicationService;
	

	@Override
	public Map<String, List<OutLogCdBean>> BindLogCd(List<BindLogCdBean> bindLogCdList) {
		// TODO Auto-generated method stub
		
		return logBaseApplicationService.BindLogCd(bindLogCdList);
	}


	@Override
	public List<WhBean> findWhList(Map<String, String> argsMap) { //창고리스트가져오는 메서드
		// TODO Auto-generated method stub
		return logBaseApplicationService.findWhList(argsMap);
	}


	@Override
	public void batchWhProcess(List<WhBean> batchWhList) {
		// TODO Auto-generated method stub
		
		logBaseApplicationService.batchWhProcess(batchWhList);
	}

}
