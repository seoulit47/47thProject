package com.seoulit.erp47.hrs.salMng.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.to.SalChangeBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangeEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangePayDeduBean;

public interface SalChangeDAO {
    
    List<SalChangeBean> findSalChangeList(Map<String, String> argsMap);
    List<SalChangeEmpBean> findSalEmpList(Map<String, String> argsMap);
    List<SalChangePayDeduBean> findPayDeduList(Map<String, String> argsMap);
    
}
