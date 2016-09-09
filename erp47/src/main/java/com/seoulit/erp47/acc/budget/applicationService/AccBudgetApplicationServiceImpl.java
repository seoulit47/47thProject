package com.seoulit.erp47.acc.budget.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.acc.budget.dao.BudgBimokDAO;
import com.seoulit.erp47.acc.budget.exception.BimokCopyException;
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

	// 예산비목 전년도복사
		@Override
		public List<BudgBimokBean> copyBimok(String year) throws BimokCopyException{
			BudgBimokBean budgBimokBean = new BudgBimokBean();
			budgBimokBean.setAccYear(year);
			budgBimokDAO.callCopyBimok(budgBimokBean);
			if(budgBimokBean.getErrorCode().equals("1")){	// Y 선택시
				HashMap<String, String> queryMap=new HashMap<String, String>();
				queryMap.put("accYear", year);
				List<BudgBimokBean> budgBimokList = budgBimokDAO.selectBimokList(queryMap);
				return budgBimokList;
			}else{
				throw new BimokCopyException(budgBimokBean.getErrorMsg());
			}
		}
}
