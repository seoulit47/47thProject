package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.BudgBimokBean;

public interface BudgBimokDAO {

	List<BudgBimokBean> selectBimokList(Map<String, String> argsMap);

	void callCopyBimok(BudgBimokBean budgBimokBean);
}
