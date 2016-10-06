package com.seoulit.erp47.hrs.yeta.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.yeta.to.HmDeptBean;
import com.seoulit.erp47.hrs.yeta.to.HmEmpBean;
import com.seoulit.erp47.hrs.yeta.to.HsPayBean;
import com.seoulit.erp47.hrs.yeta.to.HsRegularWorksSalaryBean;
import com.seoulit.erp47.hrs.yeta.to.HyDeductionBean;
import com.seoulit.erp47.hrs.yeta.to.HyDeductionDataBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentDonationBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentEducationBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentInsuranceBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentMedicalBean;
import com.seoulit.erp47.hrs.yeta.to.HyDependentPaymentBean;
import com.seoulit.erp47.hrs.yeta.to.HyFormerCompanyBean;
import com.seoulit.erp47.hrs.yeta.to.HyYtaResultBean;

public interface YetaApplicationService {
	HyDeductionBean findHyDeductionData(Map<String, String> argsMap);

	void executeYta(Map<String, String> argsMap);

	List<HmDeptBean> findHmDeptList();

	void batchHmDeptProcess(List<HmDeptBean> hmDeptList);

	List<HmEmpBean> findHmEmpList();

	void batchHmEmpProcess(List<HmEmpBean> hmEmpList);

	List<HsPayBean> findHsPayList();

	void batchHsPayProcess(List<HsPayBean> hsPayList);

	List<HsRegularWorksSalaryBean> findHsRegularWorksSalaryList();

	void batchHsRegularWorksSalaryProcess(List<HsRegularWorksSalaryBean> hsRegularWorksSalaryList);

	void batchHyDeductionDataProcess(List<HyDeductionDataBean> hyDeductionDataList);

	List<HyDependentBean> findHyDependentList();

	void batchHyDependentProcess(List<HyDependentBean> hyDependentList);

	List<HyDependentDonationBean> findHyDependentDonationList();

	void batchHyDependentDonationProcess(List<HyDependentDonationBean> hyDependentDonationList);

	List<HyDependentEducationBean> findHyDependentEducationList();

	void batchHyDependentEducationProcess(List<HyDependentEducationBean> hyDependentEducationList);

	List<HyDependentInsuranceBean> findHyDependentInsuranceList();

	void batchHyDependentInsuranceProcess(List<HyDependentInsuranceBean> hyDependentInsuranceList);

	List<HyDependentMedicalBean> findHyDependentMedicalList();

	void batchHyDependentMedicalProcess(List<HyDependentMedicalBean> hyDependentMedicalList);

	List<HyDependentPaymentBean> findHyDependentPaymentList();

	void batchHyDependentPaymentProcess(List<HyDependentPaymentBean> hyDependentPaymentList);

	List<HyFormerCompanyBean> findHyFormerCompanyList();

	void batchHyFormerCompanyProcess(List<HyFormerCompanyBean> hyFormerCompanyList);

	List<HyYtaResultBean> findHyYtaResultList(Map<String, String> argsMap);

	void batchHyYtaResultProcess(List<HyYtaResultBean> hyYtaResultList);
}
