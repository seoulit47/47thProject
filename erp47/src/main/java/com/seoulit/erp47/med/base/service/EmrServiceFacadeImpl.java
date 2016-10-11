package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.applicationService.CautionApplicationSerevice;
import com.seoulit.erp47.med.base.applicationService.EmrApplicationService;
import com.seoulit.erp47.med.base.applicationService.TrmtSchdApplicationService;
import com.seoulit.erp47.med.base.applicationService.TrmtSchdTypeApplicationService;
import com.seoulit.erp47.med.base.to.AntimicrobialBean;
import com.seoulit.erp47.med.base.to.ApplyHistoryBean;
import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.CalendarBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.CutnRltnExmntBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.OrdBean;

import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatCutnHistBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PatientPrscBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;
import com.seoulit.erp47.med.base.to.TrmtSchdBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

/**
 * @Package  com.seoul.his.med.base.service
 * @Class    EmrServiceFacadeImpl.java
 * @Create   
 * @Author   
 * @Package com.seoul.his.med.base.service
 * @Class EmrServiceFacadeImpl.java
 * @Create
 * @Author
 * @Description 진료처방 공통 EMR 서비스퍼사드
 *
 * @LastUpdated
 */

@Service
public class EmrServiceFacadeImpl implements EmrServiceFacade {

	@Autowired
	private EmrApplicationService emrApplicationService;
	@Autowired
	private CautionApplicationSerevice cautionApplicationService;
    @Autowired
    private TrmtSchdTypeApplicationService trmtSchdTypeApplicationService;
    @Autowired
    private TrmtSchdApplicationService trmtSchdApplicationService;

	@Override
	public List<PrscBean> findPrscList(Map<String, String> argsMap) {
		return emrApplicationService.findPrscList(argsMap);
	}

	@Override
	public List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap) {
		return emrApplicationService.findPrscDtlList(argsMap);

	}
	@Override
	public List<OrdBean> findOrdList(Map<String, String> argsMap){
		return cautionApplicationService.findOrdList(argsMap);
	}

	@Override
	public List<SpeciesVirusBean> findVirusList(Map<String,String> argsMap){
		return cautionApplicationService.findVirusList(argsMap);
	}

	@Override
	public List<DiseaseBean> findDiseaseList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findDiseaseList(argsMap);
	}

	@Override
	public List<DiseaseBean> findDiseaseCdList() {
		// TODO Auto-generated method stub
		return emrApplicationService.findDiseaseCdList();
	}

	@Override
	public List<PatientDsBean> findPatientDsPrscList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findPatientDsPrscList(argsMap);
	}

	@Override
	public List<BaseExamBean> findBaseExamList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findBaseExamList(argsMap);
	}

	@Override
	public void batchEmrProcess(Map<String, Object> emrMap) {
		// TODO Auto-generated method stub
		emrApplicationService.batchEmrProcess(emrMap);
	}

	@Override
	public List<CutnArticleBean> findCutnArticle(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return cautionApplicationService.findCutnArticle(argsMap);
	}
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	@Override
	public void batchDiseaseProcess(List<DiseaseBean> diseaseList) {
		emrApplicationService.batchDiseaseProcess(diseaseList);
	}


	@Override
	public void batchCutnArticleProcess(List<CutnArticleBean> articleList) {
		// TODO Auto-generated method stub
		cautionApplicationService.batchCutnArticleProcess(articleList);
	}
	@Override
	public List<PatientDsBean> findPatientDsList(Map<String, String> argsMap) {
		return emrApplicationService.findPatientDsList(argsMap);
	}

	// 진료일정타입저장
	@Override
	public void batchTrmtTypeProcess(List<TrmtSchdTypeBean> trmtSchdTypeList) {
		trmtSchdTypeApplicationService.batchTrmtTypeProcess(trmtSchdTypeList);
	}

	// 진료일정타입상세저장
	@Override
	public void batchTrmtTypeDetailProcess(List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList) {
		trmtSchdTypeApplicationService.batchTrmtTypeDetailProcess(trmtSchdTypeDetailList);
	}

	// 진료일정타입조회
	@Override
	public List<TrmtSchdTypeBean> findTrmtTypeList(String empNo) {
		return trmtSchdTypeApplicationService.findTrmtTypeList(empNo);
	}

	// 진료일정상세저장
	@Override
	public void callApplyType(Map<String, String> argsMap) {
		trmtSchdTypeApplicationService.callApplyType(argsMap);
	}

	// 진료일정달력조회
	@Override
	public List<CalendarBean> findCalendarList(String yearMonth) {
		return trmtSchdApplicationService.findCalendarList(yearMonth);
	}

	// 진료일정조회
	@Override
	public List<TrmtSchdBean> findTrmtSchdList(Map<String, String> argsMap) {
		return trmtSchdApplicationService.findTrmtSchdList(argsMap);
	}

	// 진료일정상세조회
	@Override
	public List<ApplyHistoryBean> findApplyHistoryList(String empNo) {
		return trmtSchdApplicationService.findApplyHistoryList(empNo);
	}

	@Override
	public List<PatientPrscBean> findPatientPrscList(Map<String, String> argsMap) {
		return emrApplicationService.findPatientPrscList(argsMap);
	}

	@Override
	public List<PatientPrscBean> findDrugPrscList(Map<String, String> argsMap) {
		return emrApplicationService.findDrugPrscList(argsMap);
	}


	@Override // 주의사항 관련검사 조회
	public List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap) {
		return cautionApplicationService.findCutnRltnExmntList(argsMap);
	}

	@Override 
	public void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList) {
		cautionApplicationService.batchCutnRltnExmntProcess(cutnRltnExmntList);
	}

	@Override
	public List<PatCutnBean> findPatCutnList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		// 환자 주의사항 조회
		return cautionApplicationService.findPatCutnList(argsMap);
	}

	
	@Override // 환자 주의사항 수정내역 조회
	public List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap) {
		return cautionApplicationService.findPatCutnHistList(argsMap);
	}




	@Override // 환자 주의사항, 수정내역 BATCH
	public void batchPatCutnProcess(Map<String, Object> patCautionMap) {
		cautionApplicationService.batchPatCutnProcess(patCautionMap);
	}

	@Override
	public List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap) {
		return cautionApplicationService.findSpeciesVirusList(argsMap);
	}

	@Override
	public List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap) {
		return cautionApplicationService.findAntimicrobialList(argsMap);
	}

}
