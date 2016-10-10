package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.ApplyHistoryBean;
import com.seoulit.erp47.med.base.to.CalendarBean;
import com.seoulit.erp47.med.base.to.TrmtSchdBean;

public interface TrmtSchdApplicationService {

	List<CalendarBean> findCalendarList(String yearMonth);

	List<TrmtSchdBean> findTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> findApplyHistoryList(String empNo);

}
