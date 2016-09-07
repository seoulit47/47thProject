package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.acc.budget.dao.BudgBimokDAO;
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;


@Component
public class AccBudgetApplicationServiceImpl implements AccBudgetApplicationService{
	
	@Autowired
	BudgBimokDAO budgBimokDAO;


    // 예산비목 조회	
	@Override
	public List<BudgBimokBean> findBimokList(Map<String, String> argsMap) {
		List<BudgBimokBean> bimokList = budgBimokDAO.selectBimokList(argsMap);
		return bimokList;
	}

   
}
