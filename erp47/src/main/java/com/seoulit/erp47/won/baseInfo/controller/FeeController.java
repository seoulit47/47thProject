package com.seoulit.erp47.won.baseInfo.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.baseInfo.service.BaseServiceFacade;
import com.seoulit.erp47.won.baseInfo.to.FeeBean;

@Controller
public class FeeController {
		@Autowired
		DataSetBeanMapper dataSetBeanMapper;
		@Autowired
		BaseServiceFacade baseServiceFacade;
	
		@RequestMapping("won/baseInfo/findFeeListEMR.do")
		public void findFeeListEMR(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
			System.out.println("won / findFeeCdList 매서드 입니다.");
			
			PlatformData inData =  (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
			
			
			Map<String, String>argsMap = dataSetBeanMapper.variablesToMap(inData);
			System.out.println(argsMap.get("smCd"));
			
			List<FeeBean>findFeeList=baseServiceFacade.findFeeListEMR(argsMap);
			
			
	
		}
	
}
