package com.seoulit.erp47.acc.budget.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgBimokBean;

public interface BudgetServiceFacade {

	List<BudgBimokBean> findBimokList(Map<String, String> argsMap);


}