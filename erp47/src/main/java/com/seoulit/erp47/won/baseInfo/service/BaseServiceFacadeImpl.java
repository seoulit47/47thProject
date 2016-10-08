package com.seoulit.erp47.won.baseInfo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.baseInfo.applicationService.ExpTgmApplicationService;
import com.seoulit.erp47.won.baseInfo.applicationService.FeeApplicationService;
import com.seoulit.erp47.won.baseInfo.applicationService.GijunApplicationService;
import com.seoulit.erp47.won.baseInfo.applicationService.HealthInsurApplicationService;
import com.seoulit.erp47.won.baseInfo.applicationService.HroomApplicationService;
import com.seoulit.erp47.won.baseInfo.applicationService.JwjApplicationService;
import com.seoulit.erp47.won.baseInfo.to.ExpTgmBean;
import com.seoulit.erp47.won.baseInfo.to.FeeBean;
import com.seoulit.erp47.won.baseInfo.to.GijunInfoBean;
import com.seoulit.erp47.won.baseInfo.to.GijunInfoDetailBean;
import com.seoulit.erp47.won.baseInfo.to.HealthInsurBean;
import com.seoulit.erp47.won.baseInfo.to.HroomBean;
import com.seoulit.erp47.won.baseInfo.to.HroomListBean;
import com.seoulit.erp47.won.baseInfo.to.JwjBean;

@Service
public class BaseServiceFacadeImpl implements BaseServiceFacade {
	@Autowired
	private ExpTgmApplicationService expTgmApplicationService;

	@Autowired
	private FeeApplicationService feeApplicationService;

	@Autowired
	private GijunApplicationService gijunApplicationService;

	@Autowired
	private HealthInsurApplicationService healthInsurApplicationService;

	@Autowired
	private HroomApplicationService hroomApplicationService;

	@Autowired
	private JwjApplicationService jwjApplicationService;

	// 의료수가코드
	@Override
	public List<FeeBean> findFeeList(Map<String, String> argsMap) {
		return feeApplicationService.findFeeList(argsMap);
	}

	@Override
	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap) {
		return feeApplicationService.findFeeListEMR(argsMap);
	}

	@Override
	public void batchFeeProcess(List<FeeBean> feeBeanList) {
		feeApplicationService.batchFeeProcess(feeBeanList);
	}

	// 환자 건강보험
	@Override
	public List<HealthInsurBean> findHealthInsurList(Map<String, String> argsMap) {
		return healthInsurApplicationService.findHealthInsurList(argsMap);
	}

	@Override
	public void batchHealthInsurProcess(List<HealthInsurBean> healthInsurList) {
		healthInsurApplicationService.batchHealthInsurProcess(healthInsurList);
	}

	// 감면대상자
	@Override
	public List<ExpTgmBean> findExpTgmList(Map<String, String> argsMap) {
		return expTgmApplicationService.findExpTgmList(argsMap);
	}

	@Override
	public void batchExpTgmProcess(List<ExpTgmBean> expTgmBeanList) {
		expTgmApplicationService.batchExpTgmProcess(expTgmBeanList);
	}

	// 병실
	@Override
	public List<HroomBean> findHroomList(Map<String, String> argsMap) {
		return hroomApplicationService.findHroomList(argsMap);
	}

	@Override
	public List<HroomListBean> getHroomList(Map<String, String> argsMap) {
		return hroomApplicationService.getHroomList(argsMap);
	}

	@Override
	public void batchHroomProcess(List<HroomBean> hroomBeanList) {
		hroomApplicationService.batchHroomProcess(hroomBeanList);
	}

	// 재원환자조회
	@Override
	public List<JwjBean> findJwjList(Map<String, String> argsMap) {
		return jwjApplicationService.findJwjList(argsMap);
	}

	// 기준정보코드
	@Override
	public List<GijunInfoBean> findGijunInfoCodeList() {
		return gijunApplicationService.findGijunInfoCodeList();
	}

	@Override
	public List<GijunInfoDetailBean> findGijunInfoCode(String gijunCd) {
		return gijunApplicationService.findGijunInfoCode(gijunCd);
	}

	@Override
	public void batchGijunInfoProcess(List<GijunInfoBean> gijunCodeBeanList) {
		gijunApplicationService.batchGijunInfoProcess(gijunCodeBeanList);
	}

	@Override
	public void batchGijunInfoSetProcess(List<GijunInfoDetailBean> gijunCodeDetailBeanList) {
		gijunApplicationService.batchGijunInfoSetProcess(gijunCodeDetailBeanList);
	}
}
