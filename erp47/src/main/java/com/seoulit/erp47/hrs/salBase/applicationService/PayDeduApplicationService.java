package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salBase.to.PayDeduBean;
import com.seoulit.erp47.hrs.salBase.to.PayDeduSectBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    PayDeduApplicationService.java
 * @Create   2016. 10. 02.
 * @Author   
 * @Description
 *
 * @LastUpdated 2016. 6. 30.
 */

public interface PayDeduApplicationService {    
    /*지급공제항목설정*/
    public List<PayDeduBean> findPayDeduList(Map<String, String> argsMap);
    public void magamCancel(List<PayDeduBean> payDeduList);
    public void magam(List<PayDeduBean> payDeduList);
    public void batchPayDeduProcess(List<PayDeduBean> payDeduList);
    public void batchPayDeduSectProcess(List<PayDeduSectBean> payDeduSectList);
}
