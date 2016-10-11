package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

public interface TrmtSchdTypeApplicationService {

	void batchTrmtTypeProcess(List<TrmtSchdTypeBean> trmtSchdTypeList);

	void batchTrmtTypeDetailProcess(List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList);

	List<TrmtSchdTypeBean> findTrmtTypeList(String empNo);

	void callApplyType(Map<String, String> queryMap);

}
