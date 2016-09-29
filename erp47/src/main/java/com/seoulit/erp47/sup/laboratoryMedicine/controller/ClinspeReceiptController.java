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
 * @Package  com.seoul.his.sup.laboratoryMedicine.controller
 * @Class    ClinspeReceiptController.java
 * @Create   2016. 06. 03.
 * @Author   jeong
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
		PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		System.out.println("타긴타나3??");
    	List<ClinspeReceiptBean> clinspeReceiptBeanList = laboratoryMedicineServiceFacade.findClinspeReceiptList(argsMap);
    	System.out.println("타긴타나4??");
    	dataSetBeanMapper.beansToDataset(outData, clinspeReceiptBeanList, ClinspeReceiptBean.class);
	}

	/*// 검체접수 일괄처리
	@RequestMapping("sup/laboratoryMedicine/batchClinspeReceiptProcess.do")
	public void batchClinspeReceiptProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<ClinspeReceiptBean> clinspeReceiptBeanList = dataSetBeanMapper.datasetToBeans(inData, ClinspeReceiptBean.class);
		laboratoryMedicineServiceFacade.batchClinspeReceiptProcess(clinspeReceiptBeanList);
		dataSetBeanMapper.beanToDataset(outData, new ClinspeReceiptBean(), ClinspeReceiptBean.class);
	}*/
}