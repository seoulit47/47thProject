package com.seoulit.erp47.log.csr.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.csr.to.SplyRmSetCpntBean;
import com.seoulit.erp47.log.csr.to.SplyRmSetCpntHistBean;

public interface SplyRmSetCpntApplicationService {
	//공급실 SET 구성품 조회
	List<SplyRmSetCpntBean> findSplyRmSetCpntList(Map<String, String> queryMap);
	//번호생성
	String callSetCdSeq();
	
	void batchProcessSetCpntList(List<SplyRmSetCpntBean> splyRmSetCpnList,List<SplyRmSetCpntHistBean> splyRmSetCpntHistList);
}
