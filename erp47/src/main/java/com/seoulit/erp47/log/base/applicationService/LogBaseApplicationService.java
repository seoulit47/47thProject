package com.seoulit.erp47.log.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.WhBean;

public interface LogBaseApplicationService {

	
	
	public Map<String,List<OutLogCdBean>>BindLogCd(List<BindLogCdBean> bindLogCdList);
	public List<WhBean>findWhList(Map<String,String>argsMap);
	public void batchWhProcess(List<WhBean>batchWhList);
}
