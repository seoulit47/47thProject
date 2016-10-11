package com.seoulit.erp47.med.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.ApplyHistoryBean;
import com.seoulit.erp47.med.base.to.CalendarBean;
import com.seoulit.erp47.med.base.to.TrmtSchdBean;

/**
 * @Package com.seoulit.erp47.med.base.controller
 * @Class TrmtSchdController.java
 * @Create
 * @Author 김성호
 * @Description 진료일정
 *
 * @LastUpdated
 */
@Controller
public class TrmtSchdController {

	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	private EmrServiceFacade emrServiceFacade;

	// 진료일정달력 조회
	@RequestMapping("med/base/findCalendarList.do")
	public void findCalendarList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		String yearMonth = inData.getVariable("yearMonth").getString();

		List<CalendarBean> calendarList = emrServiceFacade.findCalendarList(yearMonth);

		dataSetBeanMapper.beansToDataset(outData, calendarList, CalendarBean.class);
	}

	// 진료일정 조회
	@RequestMapping("med/base/findTrmtSchdList.do")
	public void findTrmtSchdList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		// 여긴데 샹 ?
		System.out.println("findTrmtSchdList//findTrmtSchdList//findTrmtSchdList");
		System.out.println("findTrmtSchdList//findTrmtSchdList//findTrmtSchdList");
		System.out.println("findTrmtSchdList//findTrmtSchdList//findTrmtSchdList");
		
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<TrmtSchdBean> trmtSchdList = emrServiceFacade.findTrmtSchdList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, trmtSchdList, TrmtSchdBean.class);
	}

	// 진료일정 상세조회
	@RequestMapping("med/base/findApplyHistoryList.do")
	public void findApplyHistoryList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		String empNo = inData.getVariable("empNo").getString();

		System.out.println("findApplyHistoryList//findApplyHistoryList//findApplyHistoryList");
		System.out.println("findApplyHistoryList//findApplyHistoryList//findApplyHistoryList");
		System.out.println("findApplyHistoryList//findApplyHistoryList//findApplyHistoryList");

		List<ApplyHistoryBean> applyHistoryList = emrServiceFacade.findApplyHistoryList(empNo);

		dataSetBeanMapper.beansToDataset(outData, applyHistoryList, ApplyHistoryBean.class);
	}
}
