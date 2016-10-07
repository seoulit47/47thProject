package com.seoulit.erp47.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.hrs.salMng.dao.SalCalculationDAO;
import com.seoulit.erp47.hrs.salMng.to.SalCalculDetailBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculSumBean;
import com.seoulit.erp47.hrs.salMng.to.SalCalculationBean;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.applicationService
 * @Class    SalMngApplicationServiceImpl.java  
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description 
 *
 * @LastUpdated 
 */

@Component
public class SalCalculApplicationServiceImpl implements SalCalculApplicationService{

    @Autowired
    public SalCalculationDAO salCalculationDAO;

    @Autowired
    ResourceBundleMessageSource messageSource;
    
    @Override
    public List<SalCalculationBean> findSalCalList(Map<String, String> argsMap) {
        return salCalculationDAO.findSalCalList(argsMap);
    }

    @Override
    public void magamCancelSalCalList(Map<String, String> argsMap) {
        salCalculationDAO.magamCancelSalCal(argsMap);
    }

    @Override
    public void magamSalCalList(Map<String, String> argsMap) {
        salCalculationDAO.magamSalCalList(argsMap);
    }

    @Override
    public List<SalCalculSumBean> findSalCalSumList(Map<String, String> argsMap) {
        return salCalculationDAO.findSalCalSumList(argsMap);
    }

    @Override
    public void salCalculation(Map<String, String> argsMap) {
        salCalculationDAO.callSalCalculation(argsMap);
        System.out.println(argsMap.get("ERRMSG"));
    }

    @Override
    public void callUpdateSal(SalCalculDetailBean salCalculDetailBean) {
        salCalculationDAO.callUpdateSal(salCalculDetailBean);
    }
	
}
