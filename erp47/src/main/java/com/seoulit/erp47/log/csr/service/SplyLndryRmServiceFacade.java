package com.seoulit.erp47.log.csr.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.csr.to.SplyRmSetCpntBean;
import com.seoulit.erp47.log.csr.to.SplyRmSetCpntHistBean;
import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;

public interface SplyLndryRmServiceFacade {
	// 물품청구조회
	List<GdsAnspBean> findCsrGdsAnspList(Map<String, String> queryMap); 
	
	// 공급실, SET구성품, 조회
	List<SplyRmSetCpntBean> findSplyRmSetCpntList(Map<String, String> argsMap); 

	// 번호생성
	String callSetCdSeq(); 

	
	// SET 구성품 일괄처리
	void batchProcessSetCpntList(List<SplyRmSetCpntBean> splyRmSetCpnList, List<SplyRmSetCpntHistBean> splyRmSetCpntHistList); 

	void batchRlsGdsAnspList(List<GdsAnspBean> gdsAnspList, List<GdsAnspHistBean> gdsAnspHistList);

	void updatePstRlsList(List<GdsAnspHistBean> gdsAnspHistList);

}
