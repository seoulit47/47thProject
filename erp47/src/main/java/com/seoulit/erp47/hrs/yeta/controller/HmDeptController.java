package com.seoulit.erp47.hrs.yeta.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.hrs.yeta.service.YetaServiceFacade;
import com.seoulit.erp47.hrs.yeta.to.HmDeptBean;

@Controller
public class HmDeptController {
	@Autowired
	YetaServiceFacade yetaServiceFacade;
	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	private PlatformData outData;
	private PlatformData inData;

	@RequestMapping("hrs/yeta/findHmDeptList.do")
	public void findHmDeptList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// PlatformData outData = new PlatformData();
		// request.setAttribute("outData", outData);
		// outData = (PlatformData) request.getAttribute("outData");
		outData = (PlatformData) request.getAttribute("outData");

		List<HmDeptBean> hmDeptBeanList = yetaServiceFacade.findHmDeptList();

		datasetBeanMapper.beansToDataset(outData, hmDeptBeanList, HmDeptBean.class);
	}

	@RequestMapping("hrs/yeta/batchHmDeptProcess.do")
	public void batchHmDeptProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		outData = (PlatformData) request.getAttribute("outData");
		NexacroLogger.debug(inData.getDataSetList());// 받은데이터 내역보기
		List<HmDeptBean> HmDeptBeanList = datasetBeanMapper.datasetToBeans(inData, HmDeptBean.class);
		yetaServiceFacade.batchHmDeptProcess(HmDeptBeanList);

	}
}
