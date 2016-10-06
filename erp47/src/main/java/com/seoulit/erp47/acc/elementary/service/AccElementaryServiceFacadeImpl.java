package com.seoulit.erp47.acc.elementary.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.applicationService.AccElementaryApplicationService;
import com.seoulit.erp47.acc.elementary.exception.AccntNoCopyException;
import com.seoulit.erp47.acc.elementary.exception.AcntCopyException;
import com.seoulit.erp47.acc.elementary.exception.AssiCopyException;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AccntNoBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;
import com.seoulit.erp47.acc.elementary.to.AssiTypeBean;

@Service
public class AccElementaryServiceFacadeImpl implements AccElementaryServiceFacade {

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

	@Override
	public void batchAccAcntProcess(List<AccAcntBean> accAcntList) {
		accElementaryApplicationService.batchAccAcntProcess(accAcntList);
	}

	@Override
	public List<AccAcntBean> lastYearAcntCopy(Map<String, String> argsMap) throws AcntCopyException {
		return accElementaryApplicationService.lastYearAcntCopy(argsMap);
	}

	@Override
	public AccPridBean findAccPrid(Map<String, String> argsMap) {
		return accElementaryApplicationService.findAccPrid(argsMap);
	}

	@Override
	public void batchAccPridListProcess(List<AccPridBean> accPridList) {
		accElementaryApplicationService.batchAccPridListProcess(accPridList);
	}

	@Override
	public List<AssiTypeBean> findAssiTypeList(Map<String, String> argsMap) {
		return accElementaryApplicationService.findAssiTypeList(argsMap);
	}

	@Override
	public void batchAssiCodeList(HashMap<String, Object> map) {
		accElementaryApplicationService.batchAssiCodeList(map);
	}

	@Override
	public List<AssiTypeBean> lastYearAssiCodeCopy(Map<String, String> argsMap) throws AssiCopyException {
		return accElementaryApplicationService.lastYearAssiCodeCopy(argsMap);
	}

	@Override
	public List<AccntNoBean> findAccntNoList(Map<String, String> argsMap) {
		return accElementaryApplicationService.findAccntNoList(argsMap);
	}

	@Override
	public void batchAccntNoListProcess(List<AccntNoBean> accntNoList) {
		accElementaryApplicationService.batchAccntNoListProcess(accntNoList);
	}

	@Override
	public List<AccntNoBean> lastYearAccntNoCopy(Map<String, String> argsMap) throws AccntNoCopyException {
		return accElementaryApplicationService.lastYearAccntNoCopy(argsMap);
	}

}
