package com.seoulit.erp47.acc.budget.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.budget.applicationService.AccBudgetApplicationService;
import com.seoulit.erp47.acc.budget.applicationService.BudgetExecutionApplicationService;
import com.seoulit.erp47.acc.budget.applicationService.BudgetPreparationApplicationService;
import com.seoulit.erp47.acc.budget.exception.BimokCopyException;
import com.seoulit.erp47.acc.budget.exception.BudgOrgDlineException;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;
import com.seoulit.erp47.acc.budget.to.BudgMisaBean;
import com.seoulit.erp47.acc.budget.to.BudgMisaTagetBean;
import com.seoulit.erp47.acc.budget.to.BudgRegBean;
import com.seoulit.erp47.acc.budget.to.BudgUseDeptBean;
import com.seoulit.erp47.acc.budget.to.JobLimitBean;
import com.seoulit.erp47.acc.budget.to.OrgDlineBean;
import com.seoulit.erp47.acc.budget.to.RunBudgBean;


@Service
public class BudgetServiceFacadeImpl implements BudgetServiceFacade{
	
	@Autowired
	AccBudgetApplicationService accBudgetApplicationService;
	@Autowired
	BudgetPreparationApplicationService budgetPreparationApplicationService;
	@Autowired
	BudgetExecutionApplicationService budgetExecutionApplicationService;

	//예산비목 조회
	@Override
	public List<BudgBimokBean> findBimokList(Map<String, String> argsMap) {
		List<BudgBimokBean> bimokList = accBudgetApplicationService.findBimokList(argsMap);
		return bimokList;
	}

	// 예산비목 전년도복사 
	@Override
	public List<BudgBimokBean> copyBimok(String year) throws BimokCopyException {
		List<BudgBimokBean> budgBimokList = accBudgetApplicationService.copyBimok(year);
		return budgBimokList;
	}
	
	// 예산비목 일괄처리 
	@Override
	public void batchBimokProcess(List<BudgBimokBean> bimokList) {
		accBudgetApplicationService.batchBimokProcess(bimokList);
	}
	
	// 예산사용부서 조회
	@Override
	public List<BudgUseDeptBean> findBudgUseDept(Map<String, String> argsMap) {
		List<BudgUseDeptBean> findBudgUseDept = accBudgetApplicationService.findBudgUseDept(argsMap);
		return findBudgUseDept;
	}

	// 예산사용부서 저장	
	@Override
	public void batchBudgUseDeptProcess(List<BudgUseDeptBean> UseDeptBeanList) {
		   accBudgetApplicationService.batchBudgUseDeptProcess(UseDeptBeanList);
	}

		
	// 예산조회
	@Override
	public List<BudgRegBean> findBudg(Map<String, String> argsMap) {
		List<BudgRegBean> budgRegList;
		budgRegList = budgetPreparationApplicationService.findBudg(argsMap);
		return budgRegList;
	}

	// 예산등록
	@Override
	public void registerBudg(List<BudgRegBean> budgRegList) {
		budgetPreparationApplicationService.registerBudg(budgRegList);
	}

	// 예산편성 마감 조회	
	@Override
	public List<OrgDlineBean> findOrgDlineList(Map<String, String> argsMap) {
		List<OrgDlineBean> orgDlineList = budgetExecutionApplicationService.findOrgDlineList(argsMap);
		return orgDlineList;
	}

	
	// 예산편성 마감 저장	
	@Override
	public List<OrgDlineBean> registerOrgDline(OrgDlineBean orgDlineBean) throws BudgOrgDlineException {
		List<OrgDlineBean> orgDlineList = budgetExecutionApplicationService.registerOrgDline(orgDlineBean);
		return orgDlineList;
	}

	// 예산집행현황 조회
	@Override
	public List<RunBudgBean> findRunBudg(Map<String, String> argsMap) {
		List<RunBudgBean> runBudgList = accBudgetApplicationService.findRunBudg(argsMap);
		return runBudgList;
	}

	// 예산목간전용 조회	
	@Override
	public List<BudgMisaBean> findBudgMisaList(Map<String, String> argsMap) {
		List<BudgMisaBean> budgMisaBean = budgetExecutionApplicationService.gindbudgMisaList(argsMap);
		return budgMisaBean;
	}

	// 전용확정	
	@Override
	public void deciBudgMisa(Map<String, String> argsMap) {
		budgetExecutionApplicationService.deciBudgMisa(argsMap);
	}

	// 예상목간전용 저장	
	@Override
	public void appBudgMisa(List<BudgMisaBean> budgMisaList, List<BudgMisaTagetBean> budgMisaTagetList) {
		budgetExecutionApplicationService.appBudgMisa(budgMisaList, budgMisaTagetList);
	}

	// 비목코드 조회	
	@Override
	public List<RunBudgBean> findRunBudgList(Map<String, String> argsMap) {
		List<RunBudgBean> runBudgList = budgetPreparationApplicationService.findRunBudgList(argsMap);
		return runBudgList;
	}
	
	@Override
	public String getMisaNo() {
		String misaNo = budgetExecutionApplicationService.getMisaNo();
		return misaNo;
	}

	// 부서별 적정인원 조회	
	@Override
	public List<JobLimitBean> findJobLimit(Map<String, String> argsMap) {
		List<JobLimitBean> jobLimitList = accBudgetApplicationService.findJobLimit(argsMap);
		return jobLimitList;
	}

    // 부서별 적정인원 저장	
	@Override
	public void modifyJobLimit(List<JobLimitBean> jobLimitList) {
	    accBudgetApplicationService.modifyJobLimit(jobLimitList);
	}
}
