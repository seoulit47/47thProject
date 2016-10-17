package com.seoulit.erp47.hrs.salBase.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.DeduChartBean;
import com.seoulit.erp47.hrs.salBase.to.HobongBean;
import com.seoulit.erp47.hrs.salBase.to.HobongHistoryBean;
import com.seoulit.erp47.hrs.salBase.to.IncomeTaxSetBean;
import com.seoulit.erp47.hrs.salBase.to.JobBean;
import com.seoulit.erp47.hrs.salBase.to.PayDeduBean;
import com.seoulit.erp47.hrs.salBase.to.PayDeduSectBean;
import com.seoulit.erp47.hrs.salBase.to.PaydayBean;
import com.seoulit.erp47.hrs.salBase.to.SalStandardSetBean;
import com.seoulit.erp47.hrs.salBase.to.SocialInsureBean;

/**
 * @Package  com.seoul.his.hrs.salBase.service
 * @Class    SalBaseServiceFacade.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 2016.9.29
 */

public interface SalBaseServiceFacade {
	
    //직급조회
	public List<JobBean> findJobList();
	
	//호봉조회
    public List<HobongBean> findHobongList(Map<String, String> argsMap);
    
    //호봉이력조회
    public List<HobongHistoryBean> findHobongHistoryList(Map<String, String> argsMap);
    
    //호봉일괄처리
    public void batchHobongProcess(List<HobongBean> hobongList);
    
    //호봉이력일괄처리
    public void batchHobongHisProcess(List<HobongHistoryBean> hobongHisList);
    
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
    
    //급상여지급일자관리 
    public List<PaydayBean> findPaydayList(Map<String, String> argsMap);
    public List<PaydayBean> findPaydaySubList(Map<String, String> argsMap);
    public void batchPaydayProcess(List<PaydayBean> paydayList);
  
    //지급공제항목설정
    public List<PayDeduBean> findPayDeduList(Map<String, String> argsMap);
    public void magamCancel(List<PayDeduBean> payDeduList);
    public void magam(List<PayDeduBean> payDeduList);
    public void batchPayDeduProcess(List<PayDeduBean> payDeduList);
    public void batchPayDeduSectProcess(List<PayDeduSectBean> payDeduSectList);
    
    //사회보험설정
    public List<SocialInsureBean> findsocialInsureList(Map<String, String> argsMap);
    public void batchSocialInsureProcess(Map<String, String> argsMap);
    
    //급여근태기준일설정
    List<SalStandardSetBean> findSalStandardList();
    void batchSalStanSetProcess(List<SalStandardSetBean> salStanList);

}
