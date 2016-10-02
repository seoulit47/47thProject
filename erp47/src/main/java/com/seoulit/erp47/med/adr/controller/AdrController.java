package com.seoulit.erp47.med.adr.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.adr.service.AdrServiceFacade;
import com.seoulit.erp47.med.adr.to.AdrBean;

@Controller
public class AdrController {

	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	@Autowired
	AdrServiceFacade adrServiceFacade;
	
	@RequestMapping("med/adr/findAdrList.do")
	public void findAdrmfwlList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		System.out.println("adr의 findAdrList매서드입니다.");
		
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		
	
		Map<String,String>argsMap=datasetBeanMapper.variablesToMap(inData);
		
		List<AdrBean>adrList = adrServiceFacade.findAdrList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, adrList, AdrBean.class);
		
		
		
	}
	
}
