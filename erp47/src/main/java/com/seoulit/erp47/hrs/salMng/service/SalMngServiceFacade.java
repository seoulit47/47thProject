package com.seoulit.erp47.hrs.salMng.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.exception.AreadyMagamException;
import com.seoulit.erp47.hrs.salMng.to.PayRollBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculDetailBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculSumBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculationBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangeBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangeEmpBean;
import com.seoulit.erp47.hrs.salMng.to.SalChangePayDeduBean;
import com.seoulit.erp47.hrs.salMng.to.SalStatmPDFBean;
import com.seoulit.erp47.hrs.salMng.to.SalTransfBean;

/**
 * @Package  com.seoul.his.hrs.salMng.service
 * @Class    SalMngServiceFacade.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface SalMngServiceFacade {
    
    //급여명세
    List<SalCalEmpBean> findSalCalEmpList(Map<String, String> argsMap);
    List<SalStatmPDFBean> findSalStatmEmp(Map<String, String> argsMap);
    
    //급여대장
    List<PayRollBean> findPayrollList(Map<String, String> argsMap);
    
    //급상이체현황조회
    List<SalTransfBean> findSalTransfList(Map<String, String> argsMap);
    
    //급상여 변동현황
    List<SalChangeBean> findSalChangeList(Map<String, String> argsMap);
    List<SalChangeEmpBean> findSalEmpList(Map<String, String> argsMap);
    List<SalChangePayDeduBean> findPayDeduList(Map<String, String> argsMap);
    
    //급여계산
    List<SalCalculationBean> findSalCalList(Map<String, String> argsMap);
    void magamCancelSalCalList(Map<String, String> argsMap);
    void magamSalCalList(Map<String, String> argsMap);
    List<SalCalculSumBean> findSalCalSumList(Map<String, String> argsMap);
    void salCalculation(Map<String, String> argsMap) throws AreadyMagamException;
    void callUpdateSal(SalCalculDetailBean salCalculDetailBean);

}
