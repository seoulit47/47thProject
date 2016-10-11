package com.seoulit.erp47.won.outPatMgt.controller;

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
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.won.outPatMgt.service.OutPatMgtServiceFacade;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;

/**
 * @Package com.seoulit.erp47.won.outPatMgt
 * @Class PatController.java
 * @Create 2016.09.11
 * @Author 김진환
 * @Description 외래환자관리 Controller
 * @LastUpdated findPatList(환자목록조회) 생성 - 2016/09/11(김진환)
 */
@Controller
public class PatController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	private OutPatMgtServiceFacade outPatMgtServiceFacade;

	private PlatformData outData;
	private PlatformData inData;
	private Map<String, String> argsMap;

	// 환자목록조회
	@RequestMapping("won/outPatMngnt/findPatList.do")
	public void findPatList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		inData = (PlatformData) request.getAttribute("inData");
		System.out.println(inData.saveXml());
		outData = (PlatformData) request.getAttribute("outData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<PatInfoBean> list = outPatMgtServiceFacade.findPatList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, PatInfoBean.class);
	}

	// 환자한명조회
	@RequestMapping("won/outPatMngnt/findPat.do")
	public void findPat(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);

		PatInfoBean patInfoBean = outPatMgtServiceFacade.findPat(argsMap);
		dataSetBeanMapper.beanToDataset(outData, patInfoBean, PatInfoBean.class);
	}

	// 환자수정
	@RequestMapping("won/outPatMngnt/modifyPat.do")
	public void modifyPat(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		System.out.println("PatController-황자수정");
		NexacroLogger.debug(inData);
		Map<String, Object> map = new HashMap<String, Object>();
		PatInfoBean patInfoBean = dataSetBeanMapper.datasetToBean(inData, PatInfoBean.class);
		map.put("patInfoBean", patInfoBean);
		outPatMgtServiceFacade.modifyPat(map);
	}

	// 환자등록
	@RequestMapping("won/outPatMngnt/registerPat.do")
	public void registerPat(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		Map<String, Object> map = new HashMap<String, Object>();
		PatInfoBean patInfoBean = dataSetBeanMapper.datasetToBean(inData, PatInfoBean.class);
		map.put("patInfoBean", patInfoBean);
		outPatMgtServiceFacade.registerPat(map);
	}

	// 마지막환자번호조회
	@RequestMapping("won/outPatMngnt/findLastPatNo.do")
	public void findLastPatNo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		PatInfoBean patInfoBean = outPatMgtServiceFacade.findLastPatNo();
		dataSetBeanMapper.beanToDataset(outData, patInfoBean, PatInfoBean.class);
	}
}
