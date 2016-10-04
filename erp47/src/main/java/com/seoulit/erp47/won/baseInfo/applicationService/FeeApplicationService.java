package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.FeeBean;

public interface FeeApplicationService {

		List<FeeBean>findFeeListEMR(Map<String, String>argsMap);
}
