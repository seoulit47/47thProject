package com.seoulit.erp47.acc.budget.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.exception.BimokCopyException;
import com.seoulit.erp47.acc.budget.exception.BudgOrgDlineException;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;
import com.seoulit.erp47.acc.budget.to.BudgRegBean;
import com.seoulit.erp47.acc.budget.to.BudgUseDeptBean;
import com.seoulit.erp47.acc.budget.to.OrgDlineBean;
import com.seoulit.erp47.acc.budget.to.RunBudgBean;

public interface BudgetServiceFacade {

	List<BudgBimokBean> findBimokList(Map<String, String> argsMap);

	List<BudgBimokBean> copyBimok(String year) throws BimokCopyException;
	
	void batchBimokProcess(List<BudgBimokBean> bimokList);

	List<BudgUseDeptBean> findBudgUseDept(Map<String, String> argsMap);
	
	void batchBudgUseDeptProcess(List<BudgUseDeptBean> UseDeptBeanList);
	
	List<BudgRegBean> findBudg(Map<String, String> argsMap);
	
	void registerBudg(List<BudgRegBean> budgRegList);
	
	List<OrgDlineBean> findOrgDlineList(Map<String, String> argsMap);
	
	List<OrgDlineBean> registerOrgDline(OrgDlineBean orgDlineBean) throws BudgOrgDlineException;
	
	List<RunBudgBean> findRunBudg(Map<String, String> argsMap);

}
