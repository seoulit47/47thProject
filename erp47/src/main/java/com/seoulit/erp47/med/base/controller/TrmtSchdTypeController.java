package com.seoulit.erp47.med.base.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

/**
 * @Package  com.seoulit.erp47.med.base.controller
 * @Class    TrmtSchdTypeController.java
 * @Create   
 * @Author   김성호
 * @Description 진료일정타입
 *
 * @LastUpdated
 */

@Controller
public class TrmtSchdTypeController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	EmrServiceFacade emrServiceFacade;

	//진료일정 타입저장
	@RequestMapping("med/base/batchTrmtTypeProcess.do")
	public void batchTrmtTypeProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
    	NexacroLogger.debug(inData);
    	
    	List<TrmtSchdTypeBean> trmtSchdTypeList = dataSetBeanMapper.datasetToBeans(inData,TrmtSchdTypeBean.class);
    	
    	System.out.println("@@@indata"+inData);
    	emrServiceFacade.batchTrmtTypeProcess(trmtSchdTypeList);
    }

	//진료일정타입 상세 저장
	@RequestMapping("med/base/batchTrmtTypeDetailAMProcess.do")
	public void batchTrmtTypeDetailAMProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	
    	List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList;
    	
    	trmtSchdTypeDetailList = dataSetBeanMapper.datasetToBeans(inData, TrmtSchdTypeDetailBean.class);
    	emrServiceFacade.batchTrmtTypeDetailProcess(trmtSchdTypeDetailList);
    }

	//진료일정 오전시간생성
	@RequestMapping("med/base/batchTrmtTypeDetailFMProcess.do")
	public void batchTrmtTypeDetailFMProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		
    	List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList = dataSetBeanMapper.datasetToBeans(inData, TrmtSchdTypeDetailBean.class);
    	
    	emrServiceFacade.batchTrmtTypeDetailProcess(trmtSchdTypeDetailList);
    }

	//진료일정타입 조회
	@RequestMapping("med/base/findTrmtTypeList.do")
	public void findTrmtTypeList (HttpServletRequest request, HttpServletResponse response) throws Exception{
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	String empNo=inData.getVariable("empNo").getString();
    	
    	List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList = new ArrayList<TrmtSchdTypeDetailBean>();
    	List<TrmtSchdTypeBean> trmtSchdTypeList = emrServiceFacade.findTrmtTypeList(empNo);
    	
    	for(TrmtSchdTypeBean trmtSchdTypeBean : trmtSchdTypeList){
    		trmtSchdTypeDetailList.addAll(trmtSchdTypeBean.getTrmtSchdTypeDetailList());
    	}
    	
    	dataSetBeanMapper.beansToDataset(outData, trmtSchdTypeList, TrmtSchdTypeBean.class);
    	dataSetBeanMapper.beansToDataset(outData, trmtSchdTypeDetailList, TrmtSchdTypeDetailBean.class);
    }

	//진료일정 상세저장
	@RequestMapping("med/base/callApplyType.do")
	public void callApplyType (HttpServletRequest request, HttpServletResponse response) throws Exception{
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	
    	Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	
    	emrServiceFacade.callApplyType(argsMap);
    	//dataSetBeanMapper.beansToDataset(outData, null, TrmtSchdTypeDetailBean.class);
    }
}
