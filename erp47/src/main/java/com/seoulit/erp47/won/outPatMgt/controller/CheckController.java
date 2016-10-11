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
import com.seoulit.erp47.won.outPatMgt.service.OutPatMgtServiceFacade;
import com.seoulit.erp47.won.outPatMgt.to.CheckInfoBean;

/**
 * @Package com.seoul.his.won.outPatMngnt.controller
 * @Class CheckController.java
 * @Create 2016. 6. 29.
 * @Author yi
 * @Description
 *
 * @LastUpdated
 */
@Controller
public class CheckController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	private OutPatMgtServiceFacade outPatMgtServiceFacade;

	private PlatformData outData;
	private PlatformData inData;
	private Map<String, String> argsMap;

	// 체크내역조회
	@RequestMapping("won/outPatMngnt/findCheckList.do")
	public void findCheckList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<CheckInfoBean> list = outPatMgtServiceFacade.findCheckList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, CheckInfoBean.class);
	}

	// 체크내역 등록,수정,삭제
	@RequestMapping("won/outPatMngnt/mngntCheck.do")
	public void batchCheckProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		Map<String, Object> map = new HashMap<String, Object>();
		CheckInfoBean checkInfoBean = dataSetBeanMapper.datasetToBean(inData, CheckInfoBean.class);
		map.put("checkInfoBean", checkInfoBean);
		outPatMgtServiceFacade.batchCheckProcess(map);
	}
}
