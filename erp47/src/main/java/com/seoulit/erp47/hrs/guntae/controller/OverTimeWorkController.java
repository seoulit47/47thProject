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
import com.seoulit.erp47.hrs.guntae.to.OverTimeWorkBean;

/**
 * @Package  com.seoul.erp47.hrs.guntae.controller
 * @Class    OverTimeWorkController.java
 * @Create   2016. 9. 06.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 */
@Controller
@RequestMapping("hrs/overtime")
public class OverTimeWorkController {

	@Autowired
	GuntaeServiceFacade guntaeServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

    //개인 시간외근무 조회
	@RequestMapping("/findOverTimeWorkList.do")
	public void findOverTimeWorkList(HttpServletRequest request, HttpServletResponse response) throws Exception{

		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		 Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<OverTimeWorkBean> list;

		list = guntaeServiceFacade.findOverTimeWorkList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, OverTimeWorkBean.class);


	}

    //관리자 시간외근무 조회
	@RequestMapping("/findApproverOverTimeWorkList.do")
	public void findApproverOverTimeWorkList(HttpServletRequest request, HttpServletResponse response) throws Exception{

		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		List<OverTimeWorkBean> list;

		list = guntaeServiceFacade.findApproverOverTimeWorkList();

		dataSetBeanMapper.beansToDataset(outData, list, OverTimeWorkBean.class);


	}

    //시간외근무 일괄처리
	@RequestMapping("/batchOverTimeWorkProcess.do")
	public void batchOverTimeWorkProcess(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    System.out.println("시간외 근무 일괄처리 controller");
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		List<OverTimeWorkBean> list;

		list = dataSetBeanMapper.datasetToBeans(inData, OverTimeWorkBean.class);

		guntaeServiceFacade.batchOverTimeWorkProcess(list);


	}

}
