package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

/**
 * @Package  com.seoul.his.
 * @Class    HosptlzAS.java
 * @Create   2016.6.15
 * @Author   hwang
 * @Description
 *
 * @LastUpdated 
 */
public interface HosptlzApplicationService {

	
	List<ReceiptInfoBean> findHosptlzYB(Map<String, String> queryMap);  
	List<HosptlzReceiptBean> findReceipt(Map<String, String> queryMap);  
	void batchProcessHosptlzReceipt(List<HosptlzReceiptBean> hosptlzReceipt);  
	String callHosptlzReceiptSeq(); 
	List<HosptlzReceiptBean> findHosptlzReceipt(Map<String, String> queryMap);  

	void registerHosptlzRsvt(List<HosptlzRsvtBean> hosptlzRsvt);  
	String callhosptlzRsvtSeq();   
	List<HosptlzRsvtBean> findHosptlzRsvt(Map<String, String> queryMap); 
	void changeHosptlzRsvtYb(List<ReceiptInfoBean> receiptInfo);

	List<HosptlzPrdstorBean> findHosptlzPrdstorList(Map<String, String> queryMap);  
	void batchProcessHosptlzRsvt(List<HosptlzPrdstorBean> hosptlzPrdstor);  
	void chanHosptlzRsvtYb(List<HosptlzPrdstorBean> hosptlzPrdstor);  

}
