package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.dao.TrmtSchdDAO;
import com.seoulit.erp47.med.base.to.ApplyHistoryBean;
import com.seoulit.erp47.med.base.to.CalendarBean;
import com.seoulit.erp47.med.base.to.TrmtSchdBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

/**
 * @Package  com.seoulit.erp47.med.base.applicationService
 * @Class    TrmtSchdApplicationServiceImpl.java
 * @Create   
 * @Author   김성호
 * @Description 진료일정 관리
 *
 * @LastUpdated
 */

@Service
public class TrmtSchdApplicationServiceImpl implements TrmtSchdApplicationService{
	@Autowired
	private TrmtSchdDAO trmtSchdDAO;

	//진료일정달력 조회
	@Override
	public List<CalendarBean> findCalendarList(String yearMonth) {
		return trmtSchdDAO.selectCalendarList(yearMonth);
	}

	//진료일정조회
	@Override
	public List<TrmtSchdBean> findTrmtSchdList(Map<String, String> queryMap) {
		return trmtSchdDAO.selectTrmtSchdList(queryMap);
	}

	//진료일정상세조회
	@Override
	public List<ApplyHistoryBean> findApplyHistoryList(String empNo) {
		return trmtSchdDAO.selectApplyHistoryList(empNo);
	}

	@Override
	public void batchTrmtTypeProcess(List<TrmtSchdTypeBean> trmtSchdTypeList) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void batchTrmtTypeDetailProcess(List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList) {
		// TODO Auto-generated method stub
		
	}
}
