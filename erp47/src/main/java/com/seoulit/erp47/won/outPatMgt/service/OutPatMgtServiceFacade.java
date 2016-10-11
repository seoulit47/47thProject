package com.seoulit.erp47.won.outPatMgt.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.CheckInfoBean;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

/**
 * @Package  com.seoulit.erp47.won.outPatMgt.service
 * @Class    OutPatMngntServiceFacade.java
 * @Create   2016. 9. 11.
 * @Author   김진환
 * @Description
 *  외래환자관리 OutPatMngntServiceFacade
 * @LastUpdated
 */
public interface OutPatMgtServiceFacade {

	public List<PatInfoBean> findPatList(Map<String, String> argsMap);
	public PatInfoBean findPat(Map<String, String> argsMap);
	public List<ReceiptInfoBean> findReceiptList(Map<String, String> argsMap);
	
    public void modifyPat(Map<String, Object> map);
    public void registerPat(Map<String, Object> map);
    public PatInfoBean findLastPatNo();
    
    public void registerReceipt(ReceiptInfoBean receiptInfoBean);
    public void removeReceipt(ReceiptInfoBean receiptInfoBean);
    public List<CheckInfoBean> findCheckList(Map<String, String> argsMap);
    public void batchCheckProcess(Map<String, Object> map);   
    
    ////////////////////////
    
/*    CalcuOutpaTrmtCostBean calcuOutpaTrmtCost(
            Map<String, Object> procedureMap)throws Exception;

    void registerRece(OutpaTrmtCostBean outpaTrmtCost);

    OutpaTrmtCostBean findRece(Map<String, String> argsMap);*/
}
