package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PatientPrscBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

public interface EmrApplicationService {

	List<PrscBean> findPrscList(Map<String, String> argsMap);

	List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap);

	List<DiseaseBean> findDiseaseList(Map<String, String> argsMap);

	List<DiseaseBean> findDiseaseCdList();

	List<PatientDsBean> findPatientDsPrscList(Map<String, String> args);

	List<BaseExamBean> findBaseExamList(Map<String, String> argsMap);

	public void batchEmrProcess(Map<String, Object> emrMap);

	// ------------------------------------------------------------------
	// ------------------------------------------------------------------
	// ------------------------------------------------------------------

	List<PatientDsBean> findPatientDsList(Map<String, String> argsMap);

	void batchDiseaseProcess(List<DiseaseBean> diseaseList);

	List<PatientPrscBean> findPatientPrscList(Map<String, String> argsMap);

	List<PatientPrscBean> findDrugPrscList(Map<String, String> argsMap);

}
