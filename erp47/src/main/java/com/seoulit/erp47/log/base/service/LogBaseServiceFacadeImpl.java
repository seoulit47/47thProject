package com.seoulit.erp47.log.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.base.applicationService.LogBaseApplicationService;
import com.seoulit.erp47.log.base.to.BigGrpCdBean;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.CustBean;
import com.seoulit.erp47.log.base.to.GdsBean;
import com.seoulit.erp47.log.base.to.MidGrpCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.SmGrpCdBean;
import com.seoulit.erp47.log.base.to.WhBean;
@Service
public class LogBaseServiceFacadeImpl implements LogBaseServiceFacade{
	@Autowired
	private LogBaseApplicationService logBaseApplicationService;
	

	@Override
	public Map<String, List<OutLogCdBean>> BindLogCd(List<BindLogCdBean> bindLogCdList) {
		return logBaseApplicationService.BindLogCd(bindLogCdList);
	}


	@Override
	public List<WhBean> findWhList(Map<String, String> argsMap) { //창고리스트가져오는 메서드
		return logBaseApplicationService.findWhList(argsMap);
	}


	@Override
	public void batchWhProcess(List<WhBean> batchWhList) {
		logBaseApplicationService.batchWhProcess(batchWhList);
	}


	@Override
	public List<CustBean> findCustList(Map<String, String> argsMap) {
		return logBaseApplicationService.findCustList(argsMap);
	}


	@Override
	public void batchCustProcess(List<CustBean> batchCustList) {
		logBaseApplicationService.batchCustProcess(batchCustList);
	}


	@Override
	public List<GdsBean> findGdsList(Map<String, String> argsMap) {
		List<GdsBean> gdsList = logBaseApplicationService.findGdsList(argsMap);
        return gdsList;
	}


	@Override
	public void batchGdsProcess(List<GdsBean> gdsList) {
		logBaseApplicationService.batchGdsProcess(gdsList);
	}


	@Override
	public Map<String, List<OutLogCdBean>> bindLogCd(List<BindLogCdBean> bindLogCdList) {
		Map<String, List<OutLogCdBean>> bindLogCdMap = logBaseApplicationService.bindLogCd(bindLogCdList);
        return bindLogCdMap;
	}


	@Override
	public void modifyWh(List<WhBean> whList) {
		logBaseApplicationService.modifyWh(whList);
	}


	@Override
	public String callGdsCd(Map<String, String> argsMap) {
		String postCode = logBaseApplicationService.callGdsCd(argsMap);
        return postCode;
	}


	@Override
	public void batchGdsGrpCdProcess(List<BigGrpCdBean> bigGrpCdList, List<MidGrpCdBean> midGrpCdList,
			List<SmGrpCdBean> smGrpCdList) {
		logBaseApplicationService.batchGdsGrpCdProcess(bigGrpCdList, midGrpCdList, smGrpCdList);
		
	}


	@Override
	public List<BigGrpCdBean> findGrpList(Map<String, String> argsMap) {
		List<BigGrpCdBean> bigGrpList = logBaseApplicationService.findGrpList(argsMap);
        return bigGrpList;
	}

}
