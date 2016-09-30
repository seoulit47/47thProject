package com.seoulit.erp47.log.csr.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.csr.to.SplyRmSetCpntBean;
import com.seoulit.erp47.log.csr.to.SplyRmSetCpntHistBean;

public interface  SplyRmSetCpntDAO {
	//공급실 SET 구성품조회
	List<SplyRmSetCpntBean> selectSplyRmSetCpntList(Map<String, String> queryMap);
	void insertSetCdSEQ(SplyRmSetCpntBean splyRmSETCpntBean);
	//번호생성
	public String callSetCdSeq();

	
	//SET구성품 등록.
	void insertSplyRmSetCpnt(SplyRmSetCpntBean splyRmSetCpntBean);   
	//SET구성품 삭제.
	void deleteSplyRmSetCpnt(SplyRmSetCpntBean splyRmSetCpntBean);  
	//SET구성품 수정.
	void updateSplyRmSetCpnt(SplyRmSetCpntBean splyRmSetCpntBean);  

	
	//SET 구성품 상세내역 등록.
	void insertSplyRmSetCpntHist(SplyRmSetCpntHistBean splyRmSetCpntHistBean);  
	//SET 구성품 상세내역 삭제.
	void deleteSplyRmSetCpntHist(SplyRmSetCpntHistBean splyRmSetCpntHistBean);  
	//SET 구성품 상세내역 수정.
	void updateSplyRmSetCpntHist(SplyRmSetCpntHistBean splyRmSetCpntHistBean);  

}
