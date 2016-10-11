package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

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

public interface EmrServiceFacade {
   
    List<PrscBean> findPrscList(Map<String, String> argsMap);

    List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap);
    
    List<OrdBean>findOrdList(Map<String,String>argsMap);

    List<SpeciesVirusBean>findVirusList(Map<String,String>argsMap);
    
    List<DiseaseBean>findDiseaseList(Map<String,String>argsMap);
    
    List<DiseaseBean>findDiseaseCdList();
    
    List<PatientDsBean>findPatientDsPrscList(Map<String,String>args);
    
    List<BaseExamBean>findBaseExamList(Map<String,String>argsMap);
    
    public void batchEmrProcess(Map<String,Object>emrMap);
    
    List<CutnArticleBean>findCutnArticle(Map<String,String>argsMap);
    
    void batchCutnArticleProcess(List<CutnArticleBean>articleList);
    
    List<PatCutnBean>findPatCutnList(Map<String,String>argsMap); //환자 주의사항 조회


	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	List<PatientDsBean> findPatientDsList(Map<String, String> argsMap);

	void batchTrmtTypeProcess(List<TrmtSchdTypeBean> trmtSchdTypeList);//

	void batchTrmtTypeDetailProcess(List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList);//

	List<TrmtSchdTypeBean> findTrmtTypeList(String empNo);//

	void callApplyType(Map<String, String> argsMap);//

	List<CalendarBean> findCalendarList(String yearMonth);//

	List<TrmtSchdBean> findTrmtSchdList(Map<String, String> argsMap);//

	List<ApplyHistoryBean> findApplyHistoryList(String empNo);//

	void batchDiseaseProcess(List<DiseaseBean> diseaseList);

	List<PatientPrscBean> findPatientPrscList(Map<String, String> argsMap);

	List<PatientPrscBean> findDrugPrscList(Map<String, String> argsMap);

	void batchCutnArticleProcess(List<CutnArticleBean> cutnArticleList); // 주의사항
																			// 항목
																			// BATCH

	List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap); // 주의사항
																				// 관련검사
																				// 조회

	void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList); // 주의사항
																				// 관련검사
																				// BATCH

	List<PatCutnBean> findPatCutnList(Map<String, String> argsMap); // 환자 주의사항
																	// 조회

	List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap); // 환자
																			// 주의사항
																			// 수정내역
																			// 조회

	void batchPatCutnProcess(Map<String, Object> patCautionMap); // 환자 주의사항,
																	// 수정내역
																	// BATCH

	List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap);

	List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap);

}
