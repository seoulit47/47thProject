package com.seoulit.erp47.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.ctrt.to.CtrtBean;

public interface CtrtApplicationService {

	public List<CtrtBean> findCtrtList(Map<String, String> argsMap);

	public void batchCtrtList(List<CtrtBean> ctrtList);

}
