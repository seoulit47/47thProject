package com.seoulit.erp47.med.request.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.request.service.RequestServiceFacade;
import com.seoulit.erp47.med.request.to.CfrnTrmtBean;


@Controller
public class CfrnTrmtController {

	
	@Autowired
	private RequestServiceFacade requestServiceFacade;
	
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	
	@RequestMapping("med/request/findCfrnTrmtList.do")
	public void findCfrnTrmt(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		
  Map<String,String>argsMap=dataSetBeanMapper.variablesToMap(inData);
		
/*	System.out.println(argsMap.get("startDate"));
	System.out.println(argsMap.get("endDate"));
	System.out.println(argsMap.get("dateRadio"));
	System.out.println(argsMap.get("typeRadio")); 
*/		
	List<CfrnTrmtBean>CfrnTrmtList=requestServiceFacade.findCfrnTrmt(argsMap);
	//System.out.println(CfrnTrmtList.size()+"asdasd");
	dataSetBeanMapper.beansToDataset(outData, CfrnTrmtList, CfrnTrmtBean.class);
	}
	
	
	
	@RequestMapping("/med/request/batchCfrnTrmtList.do")
	public void batchCfrnTrmtList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
	
		List<CfrnTrmtBean>batchCfrnList=dataSetBeanMapper.datasetToBeans(inData,CfrnTrmtBean.class);
		
		
		requestServiceFacade.batchCfrnTrmtList(batchCfrnList);
		
	}
	
}
