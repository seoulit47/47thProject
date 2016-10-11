package com.seoulit.erp47.won.outPatMgt.controller;

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
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

@Controller
public class ReceiptPatController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	OutPatMgtServiceFacade outpatMgtServiceFacade;

	@RequestMapping("won/outPatMngnt/findReceiptList.do")
	public void findReceiptPatList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("won / findReceiptPatList 매서드입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<ReceiptInfoBean> receiptList = outpatMgtServiceFacade.findReceiptList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, receiptList, ReceiptInfoBean.class);
	}
}
