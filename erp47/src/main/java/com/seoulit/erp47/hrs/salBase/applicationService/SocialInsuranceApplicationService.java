package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.SocialInsureBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    SocialInsuranceApplicationService.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface SocialInsuranceApplicationService {
    /*사회보험설정*/
    public List<SocialInsureBean> findsocialInsureList(Map<String, String> argsMap);
    public void batchSocialInsureProcess(Map<String, String> argsMap);
}
