package com.seoulit.erp47.log.inven.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.inven.service.InvenServiceFacade;
import com.seoulit.erp47.log.inven.to.PstInvenBean;

@Controller
public class PstInvenController {
	@Autowired
	InvenServiceFacade invenServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	// 실재고 조회
	@RequestMapping("log/inven/findPstInvenList.do")
	public void findPstInvenList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<PstInvenBean> pstInvenList = invenServiceFacade.findPstInvenList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, pstInvenList, PstInvenBean.class);

	}

	// 실재고 저장
	@RequestMapping("log/inven/batchPstInvenListProcess.do")
	public void batchPstInvenListProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		List<PstInvenBean> pstInvenList;
		pstInvenList = dataSetBeanMapper.datasetToBeans(inData, PstInvenBean.class);
		invenServiceFacade.batchPstInvenListProcess(pstInvenList);

	}

}
