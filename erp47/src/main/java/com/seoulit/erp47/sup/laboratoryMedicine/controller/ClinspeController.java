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
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.controller
 * @Class    ClinspeController.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class ClinspeController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	
	@Autowired
	LaboratoryMedicineServiceFacade laboratoryMedicineServiceFacade;
	
	// 검체번호 조회
	@RequestMapping("sup/laboratoryMedicine/findMaxClinspeNo.do")
	public void findMaxClinspeNo(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
		ClinspeSequenceBean clinspeSequenceBean = (ClinspeSequenceBean)laboratoryMedicineServiceFacade.findMaxClinspeNo();
		System.out.println("[test]"+clinspeSequenceBean.getClinspeNo());
		dataSetBeanMapper.beanToDataset(outData, clinspeSequenceBean, ClinspeSequenceBean.class);
	}
	
	// 검체채취 조회
	@RequestMapping("sup/laboratoryMedicine/findClinspeList.do")
	public void findClinspeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
	    Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	List<ClinspeBean> clinspeBeanList = laboratoryMedicineServiceFacade.findClinspeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, clinspeBeanList, ClinspeBean.class);
    }
	
	// 미접수 검체조회
	@RequestMapping("sup/laboratoryMedicine/findNoReceiptClinspeList.do")
	public void findNoReceiptClinspeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		 PlatformData inData = (PlatformData)request.getAttribute("inData");
		 System.out.println(inData.saveXml());
		 PlatformData outData = (PlatformData)request.getAttribute("outData");
		 Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
	     List<ClinspeBean> clinspeBeanList = laboratoryMedicineServiceFacade.findNoReceiptClinspeList(argsMap);
	     dataSetBeanMapper.beansToDataset(outData, clinspeBeanList, ClinspeBean.class);
    }

	// 검체채취 일괄처리
	@RequestMapping("sup/laboratoryMedicine/batchClinspeProcess.do")
	public void batchClinspeProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("컨트롤러 도달??");
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<ClinspeBean> clinspeBeanList = dataSetBeanMapper.datasetToBeans(inData, ClinspeBean.class);
		laboratoryMedicineServiceFacade.batchClinspeProcess(clinspeBeanList);
		dataSetBeanMapper.beanToDataset(outData, new ClinspeBean(), ClinspeBean.class);
	}
}