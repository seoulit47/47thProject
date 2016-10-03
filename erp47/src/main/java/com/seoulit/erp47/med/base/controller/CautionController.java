package com.seoulit.erp47.med.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;



@Controller
public class CautionController {

@Autowired
DataSetBeanMapper datasetBeanMapper;
@Autowired
EmrServiceFacade emrServiceFacade;
	
		@RequestMapping("med/base/findOrdList.do")
		public void findOrdList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
			System.out.println("Med findOrdList 메서드입니다");
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
		
			
			Map<String,String>argsMap=datasetBeanMapper.variablesToMap(inData);
			
			
			List<OrdBean>ordList = emrServiceFacade.findOrdList(argsMap);
			
			datasetBeanMapper.beansToDataset(outData, ordList, OrdBean.class);
			
		}
	
		@RequestMapping("med/base/findSpeciesVirusList.do")
		public void findVirusList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
			System.out.println("med findVirus 매서드입니다");
			
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
		
			Map<String,String>argsMap = datasetBeanMapper.variablesToMap(inData);
			//code = 균속코드 , codeNm = 균속명
			
			List<SpeciesVirusBean>virusList = emrServiceFacade.findVirusList(argsMap);
			
			datasetBeanMapper.beansToDataset(outData, virusList, SpeciesVirusBean.class);
			
		}
	
		
	
}
