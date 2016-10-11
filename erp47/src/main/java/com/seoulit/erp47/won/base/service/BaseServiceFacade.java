package com.seoulit.erp47.won.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.base.to.ExpTgmBean;
import com.seoulit.erp47.won.base.to.FeeBean;
import com.seoulit.erp47.won.base.to.GijunInfoBean;
import com.seoulit.erp47.won.base.to.GijunInfoDetailBean;
import com.seoulit.erp47.won.base.to.HealthInsurBean;
import com.seoulit.erp47.won.base.to.HroomBean;
import com.seoulit.erp47.won.base.to.HroomListBean;
import com.seoulit.erp47.won.base.to.JwjBean;

@Service
public interface BaseServiceFacade {

	// 의료수가코드
	public List<FeeBean> findFeeList(Map<String, String> argsMap);

	public void batchFeeProcess(List<FeeBean> feeBeanList);

	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap);

	// 환자건강보험
	public List<HealthInsurBean> findHealthInsurList(Map<String, String> argsMap);

	public void batchHealthInsurProcess(List<HealthInsurBean> healthInsurList);

	// 감면대상자
	public List<ExpTgmBean> findExpTgmList(Map<String, String> argsMap);

	public void batchExpTgmProcess(List<ExpTgmBean> expTgmBeanList);

	// 병실
	public List<HroomBean> findHroomList(Map<String, String> argsMap);

	public List<HroomListBean> getHroomList(Map<String, String> argsMap);

	public void batchHroomProcess(List<HroomBean> hroomBeanList);

	// 재원환자조회
	public List<JwjBean> findJwjList(Map<String, String> argsMap);

	// 기준정보코드
	public List<GijunInfoBean> findGijunInfoCodeList();

	public List<GijunInfoDetailBean> findGijunInfoCode(String gijunCd);

	public void batchGijunInfoProcess(List<GijunInfoBean> gijunCodeBeanList);

	public void batchGijunInfoSetProcess(List<GijunInfoDetailBean> gijunCodeDetailBeanList);

}
