package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.to.SalChangeBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangeEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangePayDeduBean;

public interface SalChangeApplicationService {
    
    /* 급/상여 변동현황 */
    List<SalChangeBean> findSalChangeList(Map<String, String> argsMap);
    List<SalChangeEmpBean> findSalEmpList(Map<String, String> argsMap);
    List<SalChangePayDeduBean> findPayDeduList(Map<String, String> argsMap);
    
}
