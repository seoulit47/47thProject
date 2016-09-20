package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgRegBean;

public interface BudgetPreparationApplicationService {

	List<BudgRegBean> findBudg(Map<String, String> argsMap);

}
