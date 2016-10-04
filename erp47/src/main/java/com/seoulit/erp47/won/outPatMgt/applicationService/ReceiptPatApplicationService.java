package com.seoulit.erp47.won.outPatMgt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;



public interface ReceiptPatApplicationService {

    List<ReceiptInfoBean> findReceiptList(Map<String, String> argsMap);

    /*void registerReceipt(ReceiptInfoBean receiptInfoBean);

    void removeReceipt(ReceiptInfoBean receiptInfoBean);*/

}
