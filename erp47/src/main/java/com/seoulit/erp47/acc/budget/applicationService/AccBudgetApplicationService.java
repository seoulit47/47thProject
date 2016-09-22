package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.exception.BimokCopyException;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;
import com.seoulit.erp47.acc.budget.to.BudgUseDeptBean;
import com.seoulit.erp47.acc.budget.to.RunBudgBean;

public interface AccBudgetApplicationService {

	List<BudgBimokBean> findBimokList(Map<String, String> argsMap);
	
	List<BudgBimokBean> copyBimok(String year) throws BimokCopyException;

	void batchBimokProcess(List<BudgBimokBean> bimokList);

	List<BudgUseDeptBean> findBudgUseDept(Map<String, String> argsMap);
	
	void batchBudgUseDeptProcess(List<BudgUseDeptBean> useDeptBeanList);
	
	List<RunBudgBean> findRunBudg(Map<String, String> argsMap);
	
}
