package com.seoulit.erp47.log.csr.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;

public interface CsrGdsAnspApplicationService {
	// 물품청구조회
	public List<GdsAnspBean> findCsrGdsAnspList(Map<String, String> gdsAnspMap);
	public void batchRlsGdsAnspList(List<GdsAnspBean> gdsAnspList, List<GdsAnspHistBean> gdsAnspHistList);
	void batchRlsGdsAnspHistList(List<GdsAnspHistBean> gdsAnspHistList);
	public void updatePstRlsList(List<GdsAnspHistBean> gdsAnspHistList);
}
