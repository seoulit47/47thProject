package com.seoulit.erp47.sup.laboratoryMedicine.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.laboratoryMedicine.service.LaboratoryMedicineServiceFacade;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;

/**
 * @Package com.seoulit.erp47.sup.laboratoryMedicine.controller
 * @Class ClinspeReceiptController.java
 * @Create 2016. 10. 05.
 * @Author 
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class ClinspeReceiptController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	@Autowired
	LaboratoryMedicineServiceFacade laboratoryMedicineServiceFacade;

	// 검체접수 조회
	@RequestMapping("sup/laboratoryMedicine/findClinspeReceiptList.do")
	public void findClinspeReceiptList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		System.out.println(inData.saveXml()+"@@@@@@@@@@@");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<ClinspeReceiptBean> clinspeReceiptBeanList = laboratoryMedicineServiceFacade.findClinspeReceiptList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, clinspeReceiptBeanList, ClinspeReceiptBean.class);
	}

	// 검체접수 일괄처리
	@RequestMapping("sup/laboratoryMedicine/batchClinspeReceiptProcess.do")
	public void batchClinspeReceiptProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		List<ClinspeReceiptBean> clinspeReceiptBeanList = dataSetBeanMapper.datasetToBeans(inData,
				ClinspeReceiptBean.class);
		laboratoryMedicineServiceFacade.batchClinspeReceiptProcess(clinspeReceiptBeanList);
		dataSetBeanMapper.beanToDataset(outData, new ClinspeReceiptBean(), ClinspeReceiptBean.class);
	}

	// 접수된 검체중 미전달 검체조회
	@RequestMapping("sup/laboratoryMedicine/findNoDeliveryClinspeList.do")
	public void findNoDeliveryClinspeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<ClinspeReceiptBean> clinspeDeliveryBeanList = laboratoryMedicineServiceFacade.findNoDeliveryClinspeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, clinspeDeliveryBeanList, ClinspeReceiptBean.class);
	}
}