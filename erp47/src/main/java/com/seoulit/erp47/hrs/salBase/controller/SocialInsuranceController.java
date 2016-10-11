package com.seoulit.erp47.hrs.salBase.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.salBase.service.SalBaseServiceFacade;
import com.seoulit.erp47.hrs.salBase.to.SocialInsureBean;

/**
 * @Package  com.seoul.his.hrs.salBase.controller
 * @Class    SocialInsuranceController.java
 * @Create   2016. 10. 10.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class SocialInsuranceController {

	@Autowired
	public SalBaseServiceFacade salBaseServiceFacade;

	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;

	@RequestMapping("hrs/salBase/findsocialInsureList.do")
	public void findsocialInsureList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
	    PlatformData outData = (PlatformData) request.getAttribute("outData");
	    Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<SocialInsureBean> socialInsureList = salBaseServiceFacade.findsocialInsureList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, socialInsureList, SocialInsureBean.class);
	}

	@RequestMapping("hrs/salBase/batchSocialInsureProcess.do")
	public void batchSocialInsureProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");		
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);     
		salBaseServiceFacade.batchSocialInsureProcess(argsMap);    		
	}
}
