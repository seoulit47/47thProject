package com.seoulit.erp47.won.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.base.service.BaseServiceFacade;
import com.seoulit.erp47.won.base.to.FeeBean;

@Controller
public class FeeController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	BaseServiceFacade baseServiceFacade;

	@RequestMapping("won/base/findFeeListEMR.do")
	public void findFeeListEMR(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("won / findFeeCdList 매서드 입니다.");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		System.out.println(argsMap.get("smCd"));

		List<FeeBean> findFeeList = baseServiceFacade.findFeeListEMR(argsMap);

		dataSetBeanMapper.beansToDataset(outData, findFeeList, FeeBean.class);

	}

	@RequestMapping("won/base/findFeeList.do")
	public void findFeeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<FeeBean> feeBeanList = baseServiceFacade.findFeeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, feeBeanList, FeeBean.class);
	}

	@RequestMapping("won/base/batchFeeProcess.do")
	public void batchFeeProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		List<FeeBean> feeBeanList = dataSetBeanMapper.datasetToBeans(inData, FeeBean.class);
		baseServiceFacade.batchFeeProcess(feeBeanList);
		dataSetBeanMapper.beanToDataset(outData, new FeeBean(), FeeBean.class);
	}
}
