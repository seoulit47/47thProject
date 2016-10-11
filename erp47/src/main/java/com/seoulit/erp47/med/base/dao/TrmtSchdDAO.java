package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.ApplyHistoryBean;
import com.seoulit.erp47.med.base.to.CalendarBean;
import com.seoulit.erp47.med.base.to.TrmtSchdBean;

public interface TrmtSchdDAO {

	List<CalendarBean> selectCalendarList(String yearMonth);

	List<TrmtSchdBean> selectTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> selectApplyHistoryList(String empNo);

}
