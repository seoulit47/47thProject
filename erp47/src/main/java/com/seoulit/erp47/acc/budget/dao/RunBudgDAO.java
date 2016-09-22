package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.RunBudgBean;

public interface RunBudgDAO {

	List<RunBudgBean> selectRunBudg(Map<String, String> argsMap);

	/*List<RunBudgBean> selectRunBudgList(Map<String, String> argsMap);

	RunBudgBean selectRunBimok(Map<String, String> argsMap);
	*/
}
