package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.acc.budget.dao.BudgRegDAO;
import com.seoulit.erp47.acc.budget.to.BudgRegBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    BudgetPreparationApplicationServiceImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class BudgetPreparationApplicationServiceImpl implements BudgetPreparationApplicationService{
	
	@Autowired
	BudgRegDAO budgRegDAO;
	/*@Autowired
	RunBudgDAO runBudgDAO;*/

    // 예산조회
	@Override
	public List<BudgRegBean> findBudg(Map<String, String> argsMap) {
		return budgRegDAO.selectBudg(argsMap);
	}

	// 예산등록
	@Override
	public void registerBudg(List<BudgRegBean> budgRegList) {
		for(BudgRegBean budgRegBean:budgRegList){
			budgRegDAO.mergeIntoBudg(budgRegBean);
		}
	}
	
}
