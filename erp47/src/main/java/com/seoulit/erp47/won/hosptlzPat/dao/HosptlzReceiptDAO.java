package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;



public interface HosptlzReceiptDAO {

	List<ReceiptInfoBean> selectHosptlzYB(Map<String, String> argsMap);  
	List<HosptlzReceiptBean> selectReceipt(Map<String, String> argsMap); 
	void insertHosptlzReceipt(HosptlzReceiptBean hosptlzReceiptBean);  
	String selectHosptlzReceiptSeq(); 
	List<HosptlzReceiptBean> selectfindHosptlzReceipt(Map<String, String> argsMap); 
	void updateHosptlzReceipt(HosptlzReceiptBean hosptlzReceiptBean);  
	void deletedHosptlzReceipt(HosptlzReceiptBean hosptlzReceiptBean);  

}
