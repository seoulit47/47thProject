package com.seoulit.erp47.sup.nutritive.controller;

import java.util.HashMap;
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
import com.seoulit.erp47.sup.nutritive.to.FoodBean;
import com.seoulit.erp47.sup.nutritive.to.FoodDtlBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

/**
 * @Package com.seoulit.erp47.sup.nutritive.controller
 * @Class FoodController.java
 * @Create 2016. 6. 27.
 * @Author YonG
 * @Description 음식관리 Controller
 *
 * @LastUpdated
 */

@Controller
public class FoodController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	@Autowired
	NutritiveServiceFacade nutritiveServiceFacade;

	/* 영양관리 음식 관리 - 조회 */
	@RequestMapping("sup/nutritive/findFoodList.do")
	public void findFoodList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<FoodBean> foodList = nutritiveServiceFacade.findFoodList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, foodList, FoodBean.class);

	}

	/* 영양관리 음식 관리 - 상세조회 */
	@RequestMapping("sup/nutritive/findFoodDtlList.do")
	public void findFoodDtlList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<FoodDtlBean> foodDtlList = nutritiveServiceFacade.findFoodDtlList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, foodDtlList, FoodDtlBean.class);
		// System.out.println("+++++++++++++++"+outData.saveXml());
	}

	/* 영양관리 음식 관리 - 코드조회 */
	@RequestMapping("sup/nutritive/findCodeList.do")
	public void findCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		System.out.println("+++++++++++++++++"+inData.saveXml());
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<NCodeBean> codeList = nutritiveServiceFacade.findCodeList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, codeList, NCodeBean.class);
	}

	/* 영양관리 음식 관리 - 음식등록 - 저장 */
	@RequestMapping("sup/nutritive/batchFoodAddFormProcess.do")
	public void batchFoodDtlProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<FoodBean> foodList = dataSetBeanMapper.datasetToBeans(inData, FoodBean.class);
		List<FoodDtlBean> foodDtlList = dataSetBeanMapper.datasetToBeans(inData, FoodDtlBean.class);

		Map<String, Object> map = new HashMap<>();

		if (foodList != null) {
			map.put("food", foodList);
		}

		if (foodDtlList.size() > 0) {
			map.put("foodDtl", foodDtlList);
		}

		nutritiveServiceFacade.batchFoodAddFormProcess(map);
	}

	/* 영양관리 음식 관리 - 저장 */
	@RequestMapping("sup/nutritive/batchFoodMgtFormProcess.do")
	public void batchFoodMgtFormProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("짠");
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<FoodBean> foodList = dataSetBeanMapper.datasetToBeans(inData, FoodBean.class);
		List<FoodDtlBean> foodDtlList = dataSetBeanMapper.datasetToBeans(inData, FoodDtlBean.class);

		Map<String, Object> map = new HashMap<>();

		if (foodList != null) {
			map.put("food", foodList);
		}

		if (foodDtlList.size() > 0) {
			map.put("foodDtl", foodDtlList);
		}

		nutritiveServiceFacade.batchFoodMgtFormProcess(map);
	}

}