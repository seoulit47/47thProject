package com.seoulit.erp47.acc.budget.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.budget.applicationService.AccBudgetApplicationService;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;


@Service
public class BudgetServiceFacadeImpl implements BudgetServiceFacade{
	@Autowired
	AccBudgetApplicationService accBudgetApplicationService;


	//예산비목 조회
	@Override
	public List<BudgBimokBean> findBimokList(Map<String, String> argsMap) {
		List<BudgBimokBean> bimokList = accBudgetApplicationService.findBimokList(argsMap);
		return bimokList;
	}

}