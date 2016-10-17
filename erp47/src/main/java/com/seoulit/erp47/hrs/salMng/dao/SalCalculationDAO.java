package com.seoulit.erp47.hrs.salMng.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.to.SalCalculDetailBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculSumBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculationBean;

public interface SalCalculationDAO {    
    
    List<SalCalculationBean> findSalCalList(Map<String, String> argsMap);
    void magamCancelSalCal(Map<String, String> argsMap);
    void magamSalCalList(Map<String, String> argsMap);
    List<SalCalculSumBean> findSalCalSumList(Map<String, String> argsMap);
    void callSalCalculation(Map<String, String> argsMap);
    void callUpdateSal(SalCalculDetailBean salCalculDetailBean);
    
}
