package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;

import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzInsurPatException;
import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;

/**
 * @Package  com.seoul.his.won.hosptlzPat.applicationService
 * @Class    AutoInsurApplicationService.java
 * @Create   2016.10.13
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
public interface AutoInsurApplicationService {

	
    List<AutoInsurBean> findAutoInsurList(String patNo);
    public void batchAutoInsurList(List<AutoInsurBean> autoInsurBeans)  throws HosptlzInsurPatException;
}
