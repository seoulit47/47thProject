package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.DeduChartBean;
import com.seoulit.erp47.hrs.salBase.to.IncomeTaxSetBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    IncomeTaxSetApplicationService.java
 * @Create   2016. 9. 27.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface IncomeTaxSetApplicationService {   
    
	//세액 조회
    public List<IncomeTaxSetBean> findTaxChartList(Map<String, String> argsMap);
    
    //공제 조회
    public List<DeduChartBean> findDeduChartList(Map<String, String> argsMap);
    
    //세액 복사
    public void setTaxDeduCopy(int year);
    
    //세액 저장
    public void batchTaxChartProcess(List<IncomeTaxSetBean> taxList);
    
    //공제 저장
    public void batchDeductionChartProcess(List<DeduChartBean> deduChartList);
}
