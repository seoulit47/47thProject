package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgRegBean;
import com.seoulit.erp47.acc.budget.to.RunBudgBean;

public interface BudgetPreparationApplicationService {

	List<BudgRegBean> findBudg(Map<String, String> argsMap);
	
	void registerBudg(List<BudgRegBean> budgRegList);
	
	List<RunBudgBean> findRunBudgList(Map<String, String> argsMap);

}
