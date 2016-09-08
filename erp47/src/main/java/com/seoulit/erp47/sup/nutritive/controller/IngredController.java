package com.seoulit.erp47.sup.nutritive.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.nutritive.service.NutritiveServiceFacade;
import com.seoulit.erp47.sup.nutritive.to.IngredBean;

/**
 * @Package com.seoulit.erp47.sup.nutritive.controller
 * @Class IngredController.java
 * @Create 2016. 09. 07.
 * @Author YonG
 * @Description 식품관리 Controller
 *
 * @LastUpdated
 */

@Controller
public class IngredController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	@Autowired
	NutritiveServiceFacade nutritiveServiceFacade;

	/* 영양관리 식품 관리 - 조회 */
	@RequestMapping("sup/nutritive/findIngredList.do")
	public void findIngredList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<IngredBean> ingredList = nutritiveServiceFacade.findIngredList(argsMap);
		System.out.println("inData"+inData.saveXml());
		dataSetBeanMapper.beansToDataset(outData, ingredList, IngredBean.class);
		
	}

	/* 영양관리 식품 관리 - 저장 */
	@RequestMapping("sup/nutritive/batchIngredProcess.do")
	public void batchIngredProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		List<IngredBean> ingredList = dataSetBeanMapper.datasetToBeans(inData, IngredBean.class);

		nutritiveServiceFacade.batchIngredProcess(ingredList);
	}
}