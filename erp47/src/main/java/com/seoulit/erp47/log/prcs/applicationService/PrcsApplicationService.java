package com.seoulit.erp47.log.prcs.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.prcs.to.PrcsReceiptBean;

public interface PrcsApplicationService {
    List<GdsAnspBean> findAnspList(Map<String, String> argsMap);
    List<PrcsReceiptBean> findPrcsReceiptList(Map<String, String> argsMap);
    void batchPrcsReceiptProcess(List<PrcsReceiptBean> prcsReceiptList);
    List<GdsAnspHistBean> findAnspHistList(GdsAnspHistBean anspHistBean);
}
