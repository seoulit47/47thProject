package com.seoulit.erp47.log.prcs.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.prcs.to.PrcsReceiptBean;

public interface PrcsReceiptDAO {
    List<GdsAnspBean> selectAnspList(Map<String, String> argsMap);
    List<PrcsReceiptBean> selectPrcsReceiptList(Map<String, String> argsMap);
    List<GdsAnspHistBean> selectAnspHistList(GdsAnspHistBean anspHistBean);
    
    void insertPrcsReceipt(PrcsReceiptBean prcsReceiptBean);
    void updatePrcsReceipt(PrcsReceiptBean prcsReceiptBean);
    void deletePrcsReceipt(PrcsReceiptBean prcsReceiptBean);
}
