package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.HobongBean;
import com.seoulit.erp47.hrs.salBase.to.HobongHistoryBean;
import com.seoulit.erp47.hrs.salBase.to.JobBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    HobongApplicationService.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface HobongApplicationService {
    
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
}
