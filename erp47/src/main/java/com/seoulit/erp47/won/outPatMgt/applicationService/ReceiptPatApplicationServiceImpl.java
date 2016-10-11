package com.seoulit.erp47.won.outPatMgt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.outPatMgt.dao.ReceiptInfoDAO;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

@Service
public class ReceiptPatApplicationServiceImpl implements ReceiptPatApplicationService {

	@Autowired
	ReceiptInfoDAO receiptInfoDAO;

	@Override
	public List<ReceiptInfoBean> findReceiptList(Map<String, String> argsMap) {
		// System.out.println("OutPatMngntApplicationServiceImpl
		// findReceiptList");
		return receiptInfoDAO.findReceiptList(argsMap);
	}

	@Override
	public void registerReceipt(ReceiptInfoBean receiptInfoBean) {
		receiptInfoDAO.insertReceipt(receiptInfoBean);
	}

	@Override
	public void removeReceipt(ReceiptInfoBean receiptInfoBean) {
		receiptInfoDAO.deleteReceipt(receiptInfoBean);
	}
}
