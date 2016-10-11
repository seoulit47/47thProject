package com.seoulit.erp47.won.outPatMgt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

public interface ReceiptInfoDAO {

	List<ReceiptInfoBean> findReceiptList(Map<String, String> argsMap);

	void insertReceipt(ReceiptInfoBean receiptInfoBean);

	void updateReceipt(ReceiptInfoBean receiptInfoBean);

	void deleteReceipt(ReceiptInfoBean receiptInfoBean);

}
