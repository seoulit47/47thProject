package com.seoulit.erp47.log.ctrt.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.ctrt.service.CtrtServiceFacade;
import com.seoulit.erp47.log.ctrt.to.CtrtBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

@Controller
public class CtrtController {
	@Autowired
	CtrtServiceFacade ctrtServiceFacade;

	@Autowired
	DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("log/ctrt/findCtrtList.do")
	public void findCtrtList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		System.out.println("test : " + argsMap.get("startDate"));
		System.out.println("test : " + argsMap.get("endDate"));

		List<CtrtBean> ctrtList = ctrtServiceFacade.findCtrtList(argsMap);

		datasetBeanMapper.beansToDataset(outData, ctrtList, CtrtBean.class);
	}
	
	@RequestMapping("log/ctrt/batchCtrtProcess.do")
	public void batchCtrtProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		List<CtrtBean> ctrtList = datasetBeanMapper.datasetToBeans(inData, CtrtBean.class);
		
		System.out.println("size : " + ctrtList.size());
		for(CtrtBean bean : ctrtList ){
			System.out.println("Number : " + bean.getCtrtNo());
		}
		
		ctrtServiceFacade.batchCtrtList(ctrtList);
	}


}
