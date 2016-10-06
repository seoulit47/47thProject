package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.to.PayRollBean;

public interface PayRollApplicationService {    
    
    //급여대장
    List<PayRollBean> findPayrollList(Map<String, String> argsMap);
    
}
