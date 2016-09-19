package com.seoulit.erp47.hrs.guntae.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.guntae.service.GuntaeServiceFacade;
import com.seoulit.erp47.hrs.guntae.to.HolidayBean;

/**
 * @Package  com.seoulit.erp47.hrs.guntae.controller
 * @Class    HolidayController.java
 * @Create   2016. 9. 19.
 * @Author   
 * @Description
 *
 * @LastUpdated
 */
@Controller
@RequestMapping("hrs/holiday")
public class HolidayController {

	@Autowired
	GuntaeServiceFacade guntaeServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

    //개인휴가 조회
	@RequestMapping("/findHolidayList.do")
	public void findHolidayList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		 Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<HolidayBean> list = guntaeServiceFacade.findHolidayList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, HolidayBean.class);

	}

    //관리자 휴가신청 조회
	@RequestMapping("/findAdminHolidayList.do")
	public void findAdminHolidayList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		 Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		 System.out.println("indata:"+argsMap);

		List<HolidayBean> list = guntaeServiceFacade.findAdminHolidayList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, HolidayBean.class);

	}

    //휴가신청 일괄처리
	@RequestMapping("/batchHolidayProcess.do")
	public void batchHolidayProcess(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		List<HolidayBean> list;

		list = dataSetBeanMapper.datasetToBeans(inData, HolidayBean.class);

		guntaeServiceFacade.batchHolidayProcess(list);

	}

}
