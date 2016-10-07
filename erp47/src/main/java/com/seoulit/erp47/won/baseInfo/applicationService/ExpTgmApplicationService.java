package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.ExpTgmBean;

public interface ExpTgmApplicationService {
	public List<ExpTgmBean> findExpTgmList(Map<String, String> argsMap);

	public void batchExpTgmProcess(List<ExpTgmBean> expTgmBeanList);
}