package com.seoulit.erp47.med.base.controller;

import java.util.ArrayList;
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
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PatientPrscBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

/**
 * @Package com.seoulit.erp47.med.base.controller
 * @Class EmrController.java
 * @Create
 * @Author
 * @Description 진료처방기초 EMR 컨트롤러
 *
 * @LastUpdated
 */
@Controller
public class EmrController {

	@Autowired
	EmrServiceFacade emrServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	// 처방상세 리스트 조회
	@RequestMapping("med/base/findPrscList.do")
	public void findPrscList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<PrscBean> prscList = emrServiceFacade.findPrscList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, prscList, PrscBean.class);

	}

	@RequestMapping("med/base/findDiseaseList.do")
	public void findDiseaseList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 상병조회
		System.out.println("med findDiseaseList 매서드 입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<DiseaseBean> diseaseList = emrServiceFacade.findDiseaseList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, diseaseList, DiseaseBean.class);
	}

	@RequestMapping("med/base/findDiseaseCdList.do")
	public void findDiseaseCdList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 상병코드조회
		System.out.println("med findDiseaseCdList 매서드 입니다");

		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<DiseaseBean> diseaseCdList = emrServiceFacade.findDiseaseCdList();

		dataSetBeanMapper.beansToDataset(outData, diseaseCdList, DiseaseBean.class);
	}

	@RequestMapping("med/base/findPatientDsPrscList.do")
	public void findPatientDsPrscList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 환자처방, 상병조회
		System.out.println("med / findPatientDsPrscList 매서드입니다.");
		
		
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		System.out.println(inData.saveXml());
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<PatientDsBean> patientDsList = emrServiceFacade.findPatientDsPrscList(argsMap);

		List<PatientPrscBean> patientPrscList = new ArrayList<>();
		for (PatientDsBean patientDsBean : patientDsList) {
			patientPrscList.addAll(patientDsBean.getPatientPrscList());
		}

		
		dataSetBeanMapper.beansToDataset(outData, patientDsList, PatientDsBean.class);
		dataSetBeanMapper.beansToDataset(outData, patientPrscList, PatientPrscBean.class);
	}

	@RequestMapping("med/base/findBaseExamList.do")
	public void findBaseExamList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("med / findBaseExamList 매서드입니다.");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<BaseExamBean> baseExamList = emrServiceFacade.findBaseExamList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, baseExamList, BaseExamBean.class);
	}

	@RequestMapping("med/base/batchEmrProcess.do")
	public void batchEmrProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("med / batchEmrProcess 메서드입니다");

		/*
		 * dsOutpaReceipt=dsOutpaReceipt:u 환자별 접수 정보 TO ReceiptInfoBean
		 * dsBaseExam=dsBaseExam:u 환자기초검사TO BaseExamBean
		 * dsPatientDs=dsPatientDs:u 환자상병TO PatientDsBean
		 * dsPatientPrsc=dsPatientPrsc:u 환자처방TO PatientPrscBean
		 * 
		 */

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		System.out.println(inData.saveXml());
		
		List<ReceiptInfoBean> receiptList = dataSetBeanMapper.datasetToBeans(inData, ReceiptInfoBean.class);
		List<BaseExamBean> baseExamList = dataSetBeanMapper.datasetToBeans(inData, BaseExamBean.class);
		List<PatientDsBean> patientDsList = dataSetBeanMapper.datasetToBeans(inData, PatientDsBean.class);
		List<PatientPrscBean> patientPrscList = dataSetBeanMapper.datasetToBeans(inData, PatientPrscBean.class);

		Map<String, Object> emrMap = new HashMap<>();

		emrMap.put("receiptList", receiptList);
		emrMap.put("baseExamList", baseExamList);
		emrMap.put("patientDsList", patientDsList);
		emrMap.put("patientPrscList", patientPrscList);

		emrServiceFacade.batchEmrProcess(emrMap);
	}
	
	@RequestMapping("med/base/findSearchPatientPrscList.do")
	public void findSearchPatientPrscList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<PatientPrscBean> patientPrscList = emrServiceFacade.findPatientPrscList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, patientPrscList, PatientPrscBean.class);
	}
	
	@RequestMapping("med/base/findPrescDtl.do")
	public void findPrescDtl(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<PrscDtlBean> PrscDtlList = emrServiceFacade.findPrscDtlList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, PrscDtlList, PrscDtlBean.class);
	}
}
