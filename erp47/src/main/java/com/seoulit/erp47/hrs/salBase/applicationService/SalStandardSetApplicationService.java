package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;

import com.seoulit.erp47.hrs.salBase.to.SalStandardSetBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    SalStandardSetApplicationService.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 2016. 6. 30.
 */

public interface SalStandardSetApplicationService {
    /*급여,근태 기준일설정*/
    List<SalStandardSetBean> findSalStandardList();
    void batchSalStanSetProcess(List<SalStandardSetBean> salStanList);
}
