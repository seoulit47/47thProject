package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgRegBean;

public interface BudgRegDAO {

	List<BudgRegBean> selectBudg(Map<String, String> argsMap);

	//void mergeIntoBudg(BudgRegBean budgRegBean);

}
