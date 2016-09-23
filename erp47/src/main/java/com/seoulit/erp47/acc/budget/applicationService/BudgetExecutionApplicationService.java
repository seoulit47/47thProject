package com.seoulit.erp47.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.exception.BudgOrgDlineException;
import com.seoulit.erp47.acc.budget.to.BudgMisaBean;
import com.seoulit.erp47.acc.budget.to.OrgDlineBean;

public interface BudgetExecutionApplicationService {
    
	List<OrgDlineBean> findOrgDlineList(Map<String, String> argsMap);
	
	List<OrgDlineBean> registerOrgDline(OrgDlineBean orgDlineBean) throws BudgOrgDlineException;
	
	List<BudgMisaBean> gindbudgMisaList(Map<String, String> argsMap);

}
