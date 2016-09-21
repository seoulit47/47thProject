package com.seoulit.erp47.log.base.service24;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.CustBean;
import com.seoulit.erp47.log.base.to.GdsBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;

public interface LogBaseServiceFacade {
	public Map<String, List<OutLogCdBean>> BindLogCd(List<BindLogCdBean> bindLogCdList);
	public List<WhBean> findWhList(Map<String, String> argsMap);
	public void batchWhProcess(List<WhBean> batchWhList);
	public List<CustBean> findCustList(Map<String, String> argsMap);
	public void batchCustProcess(List<CustBean> batchCustList);

	List<GdsBean> findGdsList(Map<String, String> argsMap);
}
