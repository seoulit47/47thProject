package com.seoulit.erp47.acc.budget.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.acc.budget.service.BudgetServiceFacade;
import com.seoulit.erp47.acc.budget.to.RunBudgBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    RunBudgController.java
 * @Create   2016. 6. 16.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class RunBudgController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	BudgetServiceFacade budgetServiceFacade;
	
	// 예산현황 조회
	@RequestMapping("acc/budget/findRunBudg.do")
	public void findRunBudg(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<RunBudgBean> runBudgList = budgetServiceFacade.findRunBudg(argsMap);
		dataSetBeanMapper.beansToDataset(outData, runBudgList, RunBudgBean.class);
	}
	
	// 비목코드조회
	@RequestMapping("acc/budget/findRunBudgList.do")
	public void findRunBudgList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData) request.getAttribute("outData");
	    Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);   
		List<RunBudgBean> runBudgList = budgetServiceFacade.findRunBudgList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, runBudgList, RunBudgBean.class);
	}
}


