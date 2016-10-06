package com.seoulit.erp47.won.hosptlzPat.controller;

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
import com.seoulit.erp47.won.hosptlzPat.service.HosptlzServiceFacade;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;



/**
 * @Package  com.seoul.his.won.hosptlzPat.controller
 * @Class    HosptlzReceiptController.java
 * @Create   2016.10.06
 * @Author   박 영 희
 * @Description
 *  입원관리
 * @LastUpdated 
 */
@Controller
public class HosptlzReceiptController {

	@Autowired
	private HosptlzServiceFacade hosptlzServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	private PlatformData outData;
	private PlatformData inData;
	private Map<String, String> argsMap;
	
	// 외래접수번호와 입원여부확인
	@SuppressWarnings("unchecked")
	@RequestMapping("won/hosptlzPat/findHosptlzYB.do")
	public void findHosptlzYB(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<ReceiptInfoBean> receiptInfoList = hosptlzServiceFacade.findHosptlzYB(argsMap);
		
		dataSetBeanMapper.beansToDataset(outData, receiptInfoList, ReceiptInfoBean.class);
	}

	// 입원접수 확인
	@SuppressWarnings("unchecked")
	@RequestMapping("won/hosptlzPat/findReceipt.do")
	public void findReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = (HashMap<String, String>) request.getAttribute("argsMap");
		List<HosptlzReceiptBean> hosptlzReceipt = hosptlzServiceFacade.findReceipt(argsMap);
		
		dataSetBeanMapper.beansToDataset(outData, hosptlzReceipt, HosptlzReceiptBean.class);
	}

	//입원등록 번호 생성
	@RequestMapping("won/hosptlzPat/callHosptlzReceiptSeq.do")
	public void callHosptlzReceiptSeq(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		
		String hosptlzReceiptNo =hosptlzServiceFacade.callHosptlzReceiptSeq();
		dataSetBeanMapper.addVariable(outData, "hosptlzReceiptNo", hosptlzReceiptNo);
	}

	// 입원등록 일괄처리
	@RequestMapping("won/hosptlzPat/batchProcessHosptlzReceipt.do")
	public void batchProcessHosptlzReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		List<HosptlzReceiptBean> hosptlzReceipt = dataSetBeanMapper.datasetToBeans(inData, HosptlzReceiptBean.class);
		hosptlzServiceFacade.batchProcessHosptlzReceipt(hosptlzReceipt);
	}

	//입원등록조회
	@SuppressWarnings("unchecked")
	@RequestMapping("won/hosptlzPat/findHosptlzReceipt.do")
	public void findHosptlzReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HosptlzReceiptBean> hosptlzReceipt = hosptlzServiceFacade.findHosptlzReceipt(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hosptlzReceipt, HosptlzReceiptBean.class);

	}
}
