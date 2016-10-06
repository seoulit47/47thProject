package com.seoulit.erp47.won.hosptlzPat.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzInsurPatException;
import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;
import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;


public interface HosptlzServiceFacade {

	
	List<ReceiptInfoBean> findHosptlzYB(Map<String, String> argsMap);  
	List<HosptlzReceiptBean> findReceipt(Map<String, String> argsMap); 
	void batchProcessHosptlzReceipt(List<HosptlzReceiptBean> hosptlzReceipt);  
	String callHosptlzReceiptSeq(); 
	List<HosptlzReceiptBean> findHosptlzReceipt(Map<String, String> argsMap); 

	String callhosptlzRsvtSeq();  
	List<HosptlzRsvtBean> findHosptlzRsvt(Map<String, String> argsMap);  
	void registerHosptlzRsvt(List<HosptlzRsvtBean> hosptlzRsvt); 
	void changeHosptlzRsvtYb(List<ReceiptInfoBean> receiptInfo);  

	List<HosptlzPrdstorBean> findHosptlzPrdstorList(Map<String, String> argsMap);  
	void batchProcessHosptlzRsvt(List<HosptlzPrdstorBean> hosptlzPrdstor);
	//void cancelHosptlzRsvt(List<HosptlzPrdstorBean> hosptlzPrdstor);  
	void chanHosptlzRsvtYb(List<HosptlzPrdstorBean> hosptlzPrdstor);   
	List<HosptlzPatInfoBean> findHosptlzPat(Map<String, String> argsMap);  //입원환자 정보 조회
    void batchProcessGooutStayout(List<GooutStayoutBean> gooutStayout);  //외출/외박 신청서
    List<GooutStayoutBean> findGooutStayoutList(Map<String, String> argsMap);  //외출&외박 신청서 조회.
    List<DscgPatBean> findDscgPatList(Map<String, String> argsMap);   //퇴원환자 조회
    void modDscgDay(List<DscgPatBean> dscgPat);   //퇴원일 수정
    
    ///////////////////////////////////
    
    void calcuHosptlzTrmtCost(Map<String, String> argsMap);

    List<HosptlzPatBean> findHosptlzTrmtCost(Map<String, String> argsMap) throws Exception;

    HosptlzPatReceBean findHosptlzPatRece(Map<String, String> argsMap);

    void callHosptlzPatRece(HosptlzPatReceBean hosptlzPatReceBean);
    
    /////////////
    
    List<AutoInsurBean> findAutoInsurList(String patNo);
    public void batchAutoInsurList(List<AutoInsurBean> autoInsurBeans) throws HosptlzInsurPatException;
}
