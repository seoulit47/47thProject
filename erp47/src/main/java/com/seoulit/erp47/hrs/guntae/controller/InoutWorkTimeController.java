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
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.hrs.guntae.service.GuntaeServiceFacade;
import com.seoulit.erp47.hrs.guntae.to.InoutWorkTimeBean;

/**
 * @Package  com.seoulit.erp47.hrs.guntae.controller
 * @Class    InoutWorkTimeController.java
 * @Create   2016. 8. 29.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 */
@Controller
public class InoutWorkTimeController {

	@Autowired
	GuntaeServiceFacade guntaeServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

    //출퇴근시간 조회
	@RequestMapping("hrs/inoutTime/findInoutTimeList.do")
	public void findInoutWorkTimeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<InoutWorkTimeBean> list = guntaeServiceFacade.findInoutWorkTimeList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, InoutWorkTimeBean.class);
	}

    //출퇴근시간 일괄처리
	@RequestMapping("hrs/inoutTime/batchInoutWorkTimeProcess.do")
	public void batchInoutWorkTimeProcess(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("123");
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		List<InoutWorkTimeBean> list;

		list = dataSetBeanMapper.datasetToBeans(inData, InoutWorkTimeBean.class);

		guntaeServiceFacade.batchInoutWorkTimeProcess(list);

	}
}
