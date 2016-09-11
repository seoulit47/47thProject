package com.seoulit.erp47.log.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;

public interface LogBaseApplicationService {

	
	
	public Map<String,List<OutLogCdBean>>BindLogCd(List<BindLogCdBean> bindLogCdList);
}
