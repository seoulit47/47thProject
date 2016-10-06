package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;


public interface HosptlzRsvtDAO {

	String selectHosptlzRsvtSeq();  
	void insertHosptlzRsvt(HosptlzRsvtBean hosptlzRsvtBean); 
	List<HosptlzRsvtBean> selectHosptlzRsvt(Map<String, String> argsMap); 
	void updataHosptlzRsvtYb(ReceiptInfoBean receiptInfoBean);  

	List<HosptlzPrdstorBean> selectHosptlzPrdstorList(Map<String, String> argsMap); 
	void updataHosptlzRsvt(HosptlzPrdstorBean hosptlzPrdstorBean);
	void deletHosptlzRsvt(HosptlzPrdstorBean hosptlzPrdstorBean);  
	void chanHosptlzRsvtYb(HosptlzPrdstorBean hosptlzPrdstorBean);  





}
