package com.seoulit.erp47.log.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.base.service.LogBaseServiceFacade;
import com.seoulit.erp47.log.base.to.CustBean;


@Controller
public class CustController {


	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	
	@Autowired
	LogBaseServiceFacade logBaseServiceFacade;
	
	
	@RequestMapping("/log/base/findCustList.do")
	public void findCustList(HttpServletRequest request,HttpServletResponse response)throws Exception{
			System.out.println("거래처조회컨트롤러");
			
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData =(PlatformData)request.getAttribute("outData");
			
		
			Map<String,String>argsMap=datasetBeanMapper.variablesToMap(inData);
			
			List<CustBean>custList=logBaseServiceFacade.findCustList(argsMap);
			
			datasetBeanMapper.beansToDataset(outData, custList, CustBean.class);
		
	}
	
	@RequestMapping("/log/base/batchCustProcess.do")
	public void batchCustProcess(HttpServletRequest request,HttpServletResponse response)throws Exception{

		System.out.println("거래처크루드매서드");
	
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		
		List<CustBean>batchCustList = datasetBeanMapper.datasetToBeans(inData, CustBean.class);
		
		logBaseServiceFacade.batchCustProcess(batchCustList);
		
	}
	
	
}
