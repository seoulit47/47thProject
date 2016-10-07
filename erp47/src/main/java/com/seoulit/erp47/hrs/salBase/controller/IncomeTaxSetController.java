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
import com.seoulit.erp47.hrs.salBase.to.DeduChartBean;
import com.seoulit.erp47.hrs.salBase.to.IncomeTaxSetBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.controller
 * @Class    IncomeTaxSetController.java
 * @Create   2016. 9. 27.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class IncomeTaxSetController {
	@Autowired
	public SalBaseServiceFacade salBaseServiceFacade;

	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;

	//세액 조회
	@RequestMapping("hrs/salBase/findTaxChartList.do")
	public void findTaxChartList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<IncomeTaxSetBean> incomeTaxSetList = salBaseServiceFacade.findTaxChartList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, incomeTaxSetList, IncomeTaxSetBean.class);
	}

	//공제 조회
	@RequestMapping("hrs/salBase/findDeduChartList.do")
	public void findDeduChartList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<DeduChartBean> deduChartList = salBaseServiceFacade.findDeduChartList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, deduChartList, DeduChartBean.class);
	}
	
	//세액 저장
	@RequestMapping("hrs/salBase/batchTaxChartProcess.do")
    public void batchTaxChartProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");        
        List<IncomeTaxSetBean> taxList=dataSetBeanMapper.datasetToBeans(inData, IncomeTaxSetBean.class);
        salBaseServiceFacade.batchTaxChartProcess(taxList);
    }
	
	//공제 저장
	@RequestMapping("hrs/salBase/batchDeduChartProcess.do")
    public void batchDeductionChartProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");        
        List<DeduChartBean> deduChartList=dataSetBeanMapper.datasetToBeans(inData, DeduChartBean.class);
        salBaseServiceFacade.batchDeductionChartProcess(deduChartList);
    }
	
	//세액 복사
	@RequestMapping("hrs/salBase/setTaxDeduCopy.do")
	public void setTaxDeduCopy(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		int year =Integer.parseInt(argsMap.get("year"));
		salBaseServiceFacade.setTaxDeduCopy(year);
	}
}
