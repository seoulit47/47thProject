package com.seoulit.erp47.hrs.salBase.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.salBase.to.DeduChartBean;
import com.seoulit.erp47.hrs.salBase.to.IncomeTaxSetBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.dao
 * @Class    IncomeTaxSetDAOwwwwwwwww.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface IncomeTaxSetDAO {

    //세액 조회
	public List<IncomeTaxSetBean> findTaxChartList(Map<String, String> argsMap) throws DataAccessException;
    
	//공제 조회
	public List<DeduChartBean> findDeduChartList(Map<String, String> argsMap) throws DataAccessException;
    
	//세액 복사
	public void setTaxDeduCopy(int year) throws DataAccessException;
    
	//세액 저장
	public void insertTaxChart(IncomeTaxSetBean incomeTaxSetBean);
    public void updateTaxChart(IncomeTaxSetBean incomeTaxSetBean);
    
    //공제 저장
    public void insertDeductionChart(DeduChartBean deduChartBean);
    public void updateDeductionChart(DeduChartBean deduChartBean);

}
