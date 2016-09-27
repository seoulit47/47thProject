package com.seoulit.erp47.acc.budget.dao;

import com.seoulit.erp47.acc.budget.to.BudgMisaBean;
import com.seoulit.erp47.acc.budget.to.BudgMisaTagetBean;

public interface BudgMisaTagetDAO {

	void insertBudgMisaTaget(BudgMisaTagetBean budgMisaTagetBean);

	void updateBudgMisaTaget(BudgMisaTagetBean budgMisaTagetBean);

	void deleteBudgMisaTaget(BudgMisaTagetBean budgMisaTagetBean);

	void deleteBudgMisaTagetCascade(BudgMisaBean budgMisaBean);

}
