package com.seoulit.erp47.log.demd.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.demd.to.GdsReturnBean;
import com.seoulit.erp47.log.demd.to.GdsReturnHistBean;

public interface DemdApplicationService {
	public List<GdsReturnBean> findGdsReturnList();
	public void batchGdsReturnProcess(List<GdsReturnBean> GdsReturnList);
	public List<GdsReturnHistBean> findGdsReturnHistList();
	public void batchGdsReturnHistProcess(List<GdsReturnHistBean> GdsReturnHistList);
	public void batchGdsAnspProcess(List<GdsAnspBean> GdsAnspBeanList);
	public void batchGdsAnspHistProcess(List<GdsAnspBean> GdsAnspBeanList, List<GdsAnspHistBean> GdsAnspHistBeanList);
	public List<GdsAnspBean> findGdsAnspList(Map<String, String> argsMap);
	public GdsAnspHistBean findGdsAnspHistList(Map<String, String> argsMap);
}
