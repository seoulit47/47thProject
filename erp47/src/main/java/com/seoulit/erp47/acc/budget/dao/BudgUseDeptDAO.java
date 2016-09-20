package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgUseDeptBean;

public interface BudgUseDeptDAO {

	List<BudgUseDeptBean> selectBudgUseDept(Map<String, String> argsMap);
	
	void insertBudgUseDept(BudgUseDeptBean budgUseDeptBean);

	void updateBudgUseDept(BudgUseDeptBean budgUseDeptBean);

	void deleteBudgUseDept(BudgUseDeptBean budgUseDeptBean);
	
}
