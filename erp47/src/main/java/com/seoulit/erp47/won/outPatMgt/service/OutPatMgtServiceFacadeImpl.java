package com.seoulit.erp47.won.outPatMgt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.outPatMgt.applicationService.OutPatMgtApplicationService;
import com.seoulit.erp47.won.outPatMgt.applicationService.ReceiptPatApplicationService;
import com.seoulit.erp47.won.outPatMgt.to.CheckInfoBean;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

/**
 * @Package  com.seoulit.erp47.won.outPatMgt.service
 * @Class    OutPatMgtServiceFacadeImpl.java
 * @Create   2016. 09. 11.
 * @Author   김진환
 * @Description
 *
 * @LastUpdated
 */

@Service
public class OutPatMgtServiceFacadeImpl implements OutPatMgtServiceFacade {
	@Autowired
	OutPatMgtApplicationService outPatMgtApplicationService; 
	@Autowired
	ReceiptPatApplicationService receiptPatApplicationService;
	
	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return outPatMgtApplicationService.findPatList(argsMap);
	}
	@Override
    public PatInfoBean findPat(Map<String, String> argsMap) {
        return outPatMgtApplicationService.findPat(argsMap);
    }
    @Override
    public void modifyPat(Map<String, Object> map) {
    	outPatMgtApplicationService.modifyPat(map);
    }
    @Override
    public void registerPat(Map<String, Object> map) {
    	outPatMgtApplicationService.registerPat(map);
    }
    @Override
    public PatInfoBean findLastPatNo() {
        System.out.println("OutPatMngntServiceFacadeImpl - findLastPatNo");
        return outPatMgtApplicationService.findLastPatNo();
    }
    @Override
    public List<ReceiptInfoBean> findReceiptList(Map<String, String> argsMap) {
        //System.out.println("OutPatMngntServiceFacadeImpl findReceiptList");
        return receiptPatApplicationService.findReceiptList(argsMap);
    }
    @Override
    public void registerReceipt(ReceiptInfoBean receiptInfoBean) {
        receiptPatApplicationService.registerReceipt(receiptInfoBean);
    }
    @Override
    public void removeReceipt(ReceiptInfoBean receiptInfoBean) {
        receiptPatApplicationService.removeReceipt(receiptInfoBean);
    }
    @Override
    public List<CheckInfoBean> findCheckList(Map<String, String> argsMap) {

        return outPatMgtApplicationService.findCheckList(argsMap);
    }
    @Override
    public void batchCheckProcess(Map<String, Object> map) {
    	outPatMgtApplicationService.batchCheckProcess(map);
    }
}
