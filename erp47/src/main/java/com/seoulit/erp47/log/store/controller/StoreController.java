package com.seoulit.erp47.log.store.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.store.service.StoreFacade;
import com.seoulit.erp47.log.store.to.PrcsWhsBean;
import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

@Controller
public class StoreController {
	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	
	@Autowired
	StoreFacade storeFacade;
	
	@RequestMapping("log/store/findPrcsWhsList.do")
	public void findPrcsWhsList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			//구매입고정보조회
			System.out.println("findPrcsWhsList 매서드입니다");
		
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
		
			Map<String, String>argsMap=datasetBeanMapper.variablesToMap(inData);
			
			List<PrcsWhsBean>prcsWhsList=storeFacade.findPrcsWhsList(argsMap);
			
			datasetBeanMapper.beansToDataset(outData, prcsWhsList, PrcsWhsBean.class);
			
	}
	@RequestMapping("log/store/findPrcsWhsHistList.do")
	public void findPrcsWhsHistList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		//구매입고내역조회
		System.out.println("findPrcsWhsHistList 매서드입니다");
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		
		Map<String, String>argsMap=datasetBeanMapper.variablesToMap(inData);
		
		List<PrcsWhsHistBean>prcsWhsHisList = storeFacade.findPrcsWhsHistList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, prcsWhsHisList, PrcsWhsHistBean.class);
		
	}
	@RequestMapping("log/store/batchPrcsWhsProcess.do")
	public void batchPrcsWhsProcess(HttpServletRequest request, HttpServletResponse response)throws Exception{
		System.out.println("batchPrcsWhsProcess 매서드입니다");
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		
		List<PrcsWhsBean>prcsWhsList = datasetBeanMapper.datasetToBeans(inData, PrcsWhsBean.class);
		
		storeFacade.batchPrcsWhsProcess(prcsWhsList);
	}
	
}
