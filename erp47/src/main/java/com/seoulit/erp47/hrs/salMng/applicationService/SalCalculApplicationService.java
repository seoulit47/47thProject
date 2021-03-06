package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.exception.AreadyMagamException;
import com.seoulit.erp47.hrs.salMng.to.SalCalculDetailBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculSumBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculationBean;

public interface SalCalculApplicationService { 
    
    List<SalCalculationBean> findSalCalList(Map<String, String> argsMap);
    void magamCancelSalCalList(Map<String, String> argsMap);
    void magamSalCalList(Map<String, String> argsMap);
    List<SalCalculSumBean> findSalCalSumList(Map<String, String> argsMap);
    void salCalculation(Map<String, String> argsMap) throws AreadyMagamException;
    void callUpdateSal(SalCalculDetailBean salCalculDetailBean);
    
}
