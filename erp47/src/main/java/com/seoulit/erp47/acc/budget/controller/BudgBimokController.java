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
import com.seoulit.erp47.acc.budget.to.BudgBimokBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class BudgBimokController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	BudgetServiceFacade budgetServiceFacade;
	
	// 예산비목 조회
		@RequestMapping("acc/budget/findBudgBimokList.do")
		public void findBimokList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		    PlatformData inData = (PlatformData) request.getAttribute("inData");
			PlatformData outData = (PlatformData) request.getAttribute("outData");
			Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
			List<BudgBimokBean> bimokList = budgetServiceFacade.findBimokList(argsMap);
			dataSetBeanMapper.beansToDataset(outData, bimokList, BudgBimokBean.class);
		}
		
		// 예산비목 전년도복사 
		@RequestMapping("acc/budget/copyBimok.do")
		public void copyBimok(HttpServletRequest request, HttpServletResponse response) throws Exception{
		    PlatformData inData = (PlatformData) request.getAttribute("inData");
			PlatformData outData = (PlatformData) request.getAttribute("outData");
			String year = inData.getVariable("year").getString();
			List<BudgBimokBean> budgBimokList = budgetServiceFacade.copyBimok(year);
			dataSetBeanMapper.beansToDataset(outData, budgBimokList, BudgBimokBean.class);
		}
}
