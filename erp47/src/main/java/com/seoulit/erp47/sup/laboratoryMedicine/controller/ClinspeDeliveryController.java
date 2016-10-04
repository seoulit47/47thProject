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
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.controller
 * @Class    ClinspeDeliveryController.java
 * @Create   2016. 10. 04.
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class ClinspeDeliveryController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	
	@Autowired
	LaboratoryMedicineServiceFacade laboratoryMedicineServiceFacade;
	
	// 접수된 검체중 미전달 검체조회
	@RequestMapping("sup/laboratoryMedicine/findNoDeliveryClinspeList.do")
	public void findNoDeliveryClinspeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	List<ClinspeReceiptBean> clinspeReceiptBeanList = laboratoryMedicineServiceFacade.findNoDeliveryClinspeList(argsMap);
    	dataSetBeanMapper.beansToDataset(outData, clinspeReceiptBeanList, ClinspeReceiptBean.class);
	}
	
	// 접수된 검체중 미전달 검체조회
	@RequestMapping("sup/laboratoryMedicine/updateDeliveryClinspeStatus.do")
	public void updateDeliveryClinspeStatus(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	laboratoryMedicineServiceFacade.updateDeliveryClinspeStatus(argsMap);
    	
	}
	
}