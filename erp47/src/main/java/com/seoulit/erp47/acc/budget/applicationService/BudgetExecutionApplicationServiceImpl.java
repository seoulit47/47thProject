package com.seoulit.erp47.acc.budget.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.acc.budget.dao.BudgMisaDAO;
import com.seoulit.erp47.acc.budget.dao.OrgDlineDAO;
import com.seoulit.erp47.acc.budget.exception.BudgOrgDlineException;
import com.seoulit.erp47.acc.budget.to.BudgMisaBean;
import com.seoulit.erp47.acc.budget.to.OrgDlineBean;


@Component
public class BudgetExecutionApplicationServiceImpl implements BudgetExecutionApplicationService{
	
	@Autowired
	OrgDlineDAO orgDlineDAO;
	@Autowired
	BudgMisaDAO budgMisaDAO;

    // 예산편성 마감 조회
	@Override
	public List<OrgDlineBean> findOrgDlineList(Map<String, String> argsMap) {
		List<OrgDlineBean> orgDlineList = orgDlineDAO.selectOrgDlineList(argsMap);
		return orgDlineList;
	}


	// 예산편성 마감 저장  
	@Override
	public List<OrgDlineBean> registerOrgDline(OrgDlineBean orgDlineBean) throws BudgOrgDlineException {
		orgDlineDAO.callOrgDlineReg(orgDlineBean);
		String errorMsg = orgDlineBean.getErrorMsg();
		String errorCode = orgDlineBean.getErrorCode();
		
		if(errorCode.equals("-1")){
			
			throw new BudgOrgDlineException(errorMsg);
		}
			
		HashMap<String, String> queryMap = new HashMap<String, String>();
		queryMap.put("accYear", orgDlineBean.getAccYear());
			
		List<OrgDlineBean> orgDlineList = orgDlineDAO.selectOrgDlineList(queryMap);
		
		return orgDlineList;
	}

	
	// 예산목간전용 조회   
	@Override
	public List<BudgMisaBean> gindbudgMisaList(Map<String, String> argsMap) {
		List<BudgMisaBean> budgMisaList = budgMisaDAO.selectBudgMisaList(argsMap);
		return budgMisaList;
	}
	
	
	// 전용확정    
	@Override
	public void deciBudgMisa(Map<String, String> argsMap) {
		argsMap.put("errorCode", "");
		argsMap.put("errorMsg", "");
		//budgMisaDAO.callDeciBudgMisa(argsMap);
	}
    
}
