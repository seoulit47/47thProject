package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.exception.BimokCopyException;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;

public interface AccBudgetApplicationService {

	List<BudgBimokBean> findBimokList(Map<String, String> argsMap);
	
	List<BudgBimokBean> copyBimok(String year) throws BimokCopyException;

}
