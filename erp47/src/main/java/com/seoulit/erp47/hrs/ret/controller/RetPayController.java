package com.seoulit.erp47.hrs.ret.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.ret.service.RetServiceFacade;
import com.seoulit.erp47.hrs.ret.to.RetPayBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.controller
 * @Class RetPayController.java
 * @Create 2016. 10. 3.
 * @Author 김봉진
 * @Description 퇴직금 조회 및 계산
 * @LastUpdated 2016. 10. 4.
 */
@Controller
public class RetPayController {
	@Autowired
	private RetServiceFacade retServiceFacade;
	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("hrs/ret/findRetPayList.do")
	public void findRetPayList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap;
		argsMap = datasetBeanMapper.variablesToMap(inData);
		List<RetPayBean> retPayList;

		retPayList = retServiceFacade.findRetPayList(argsMap);
		datasetBeanMapper.beansToDataset(outData, retPayList, RetPayBean.class);
	}

	@RequestMapping("hrs/ret/calcRetPayProcess.do")
	public void calcRetPayProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap;
		argsMap = datasetBeanMapper.variablesToMap(inData);
		System.out.println(argsMap.get("empNo"));
		retServiceFacade.calcRetPayProcess(argsMap);

	}

	@RequestMapping("hrs/ret/batchRetPayProcess.do")
	public void batchRetPayProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		List<RetPayBean> retPayList = datasetBeanMapper.datasetToBeans(inData, RetPayBean.class);
		retServiceFacade.batchRetPayProcess(retPayList);
	}

}
