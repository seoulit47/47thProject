package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.PaydayBean;

/**
 * @Package  com.seoul.his.hrs.salBase.applicationService
 * @Class    PaydayApplicationService.java
 * @Create   2016. 9. 29.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface PaydayApplicationService {   
    /*급상여지급일자관리*/
    public List<PaydayBean> findPaydayList(Map<String, String> argsMap);
    public List<PaydayBean> findPaydaySubList(Map<String, String> argsMap);
    public void batchPaydayProcess(List<PaydayBean> paydayList);
}
