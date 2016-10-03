package com.seoulit.erp47.hrs.emp.controller;

import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.emp.service.EmpServiceFacade;
import com.seoulit.erp47.hrs.emp.to.CareerBean;
import com.seoulit.erp47.hrs.emp.to.DisabilityBean;
import com.seoulit.erp47.hrs.emp.to.EducaBean;
import com.seoulit.erp47.hrs.emp.to.EmpBean;
import com.seoulit.erp47.hrs.emp.to.FamilyBean;
import com.seoulit.erp47.hrs.emp.to.LicenseBean;
import com.seoulit.erp47.hrs.emp.to.MilitaryBean;
import com.seoulit.erp47.hrs.emp.to.PerconaldateBean;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 * @Package com.seoulit.erp47.com.base.controller
 * @Class EmpController.java
 * @Create 2016. 08. 26.
 * @Author Hwanee
 * @Description 사원 컨트롤러
 * 
 * @LastUpdated 사원정보 조회 : 2016.09.08 by 김봉진
 */

@Controller
public class EmpController {

	@Autowired
	private EmpServiceFacade empServiceFacade;

	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("hrs/emp/findEmpList.do")
	public void findEmpList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		System.out.println("[empNo]" + argsMap.get("empNo"));
		System.out.println("[empNm]" + argsMap.get("empNm"));
		List<EmpBean> empList = empServiceFacade.findEmpList(argsMap);

		datasetBeanMapper.beansToDataset(outData, empList, EmpBean.class);
	}

	@RequestMapping("hrs/emp/findRetireeList.do")
	public void findRetireeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		HashMap<String, String> argsMap;
		argsMap = (HashMap<String, String>) request.getAttribute("argsMap");

		List<EmpBean> list = empServiceFacade.findRetireeList(argsMap);
		datasetBeanMapper.beansToDataset(outData, list, EmpBean.class);
	}

	@RequestMapping("hrs/emp/registerEmpImage.do")
	public void registerEmpImage(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		DataSet imgDs = inData.getDataSet("dsImage");
		FileOutputStream out = null;
		String imgName = null;

		int imgDatasetRow = imgDs.getRowCount();
		for (int i = 0; i < imgDatasetRow; i++) {
			imgName = (String) imgDs.getObject(i, "imgNm");

			// byte[] file = (byte[]) imgDs.getObject(i, "imgBinary");
			byte[] file = imgDs.getBlob(i, "imgBinary");

			if (imgName != null) {
				// out = new
				// FileOutputStream("///106.242.162.222//Apache2.2//htdocs//img//"
				// + imgName);
				out = new FileOutputStream("C:/Dev/Server/apache-httpd-2.2.25/htdocs/his/images/hrsImg/" + imgName);
				out.write(file);
				out.flush();
				System.out.println("이미지 이름 : " + imgName);
				out.close();
				out = null;
			} else {
				System.out.println("이미지가 NULL 입니다.");
			}
		}
	}

	@SuppressWarnings("unchecked")
	@RequestMapping("hrs/emp/selectEmpList.do")
	public void selectEmpList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		System.out.println("Check" + argsMap);
		List<EmpBean> list = empServiceFacade.selectEmpList(argsMap);

		List<CareerBean> careerList = new ArrayList<CareerBean>();
		List<DisabilityBean> disabilityList = new ArrayList<DisabilityBean>();
		List<EducaBean> educationList = new ArrayList<EducaBean>();
		List<FamilyBean> familyList = new ArrayList<FamilyBean>();
		List<LicenseBean> licenseList = new ArrayList<LicenseBean>();
		List<MilitaryBean> militaryList = new ArrayList<MilitaryBean>();
		List<PerconaldateBean> perconaldateList = new ArrayList<PerconaldateBean>();

		for (EmpBean empBean : list) {

			List<CareerBean> careerBeanList = empBean.getCareerList();
			if (careerBeanList != null)
				careerList.addAll(careerBeanList);
			List<DisabilityBean> disabilityBeanList = empBean.getDisabilityList();
			if (disabilityBeanList != null)
				disabilityList.addAll(disabilityBeanList);
			List<EducaBean> educationBeanList = empBean.getEducationBeanList();
			if (educationBeanList != null)
				educationList.addAll(educationBeanList);
			List<FamilyBean> familyBeanList = empBean.getFamilyList();
			if (familyBeanList != null)
				familyList.addAll(familyBeanList);
			List<LicenseBean> licenseBeanList = empBean.getLicenseList();
			if (licenseBeanList != null)
				licenseList.addAll(licenseBeanList);
			List<MilitaryBean> militaryBeanList = empBean.getMilitaryList();
			if (militaryBeanList != null)
				militaryList.addAll(militaryBeanList);
			List<PerconaldateBean> perconaldateBeanList = empBean.getPerconaldateList();
			if (perconaldateBeanList != null)
				perconaldateList.addAll(perconaldateBeanList);
		}

		datasetBeanMapper.beansToDataset(outData, list, EmpBean.class);

		datasetBeanMapper.beansToDataset(outData, careerList, CareerBean.class);
		datasetBeanMapper.beansToDataset(outData, disabilityList, DisabilityBean.class);
		datasetBeanMapper.beansToDataset(outData, educationList, EducaBean.class);
		datasetBeanMapper.beansToDataset(outData, familyList, FamilyBean.class);
		datasetBeanMapper.beansToDataset(outData, licenseList, LicenseBean.class);
		datasetBeanMapper.beansToDataset(outData, militaryList, MilitaryBean.class);
		datasetBeanMapper.beansToDataset(outData, perconaldateList, PerconaldateBean.class);

	}

	@RequestMapping("hrs/emp/mngntEmp.do")
	public void batchEmpProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		Map<String, Object> map = new HashMap<String, Object>();

		List<EmpBean> empList = datasetBeanMapper.datasetToBeans(inData, EmpBean.class);
		map.put("empList", empList);

		List<FamilyBean> familyList = datasetBeanMapper.datasetToBeans(inData, FamilyBean.class);
		map.put("familyList", familyList);

		List<EducaBean> educationList = datasetBeanMapper.datasetToBeans(inData, EducaBean.class);
		map.put("educationList", educationList);

		List<CareerBean> careerList = datasetBeanMapper.datasetToBeans(inData, CareerBean.class);
		map.put("careerList", careerList);

		List<LicenseBean> licenseList = datasetBeanMapper.datasetToBeans(inData, LicenseBean.class);
		map.put("licenseList", licenseList);

		List<PerconaldateBean> perconaldateList = datasetBeanMapper.datasetToBeans(inData, PerconaldateBean.class);
		map.put("perconaldateList", perconaldateList);

		List<MilitaryBean> militaryList = datasetBeanMapper.datasetToBeans(inData, MilitaryBean.class);
		map.put("militaryList", militaryList);

		List<DisabilityBean> disabilityList = datasetBeanMapper.datasetToBeans(inData, DisabilityBean.class);
		map.put("disabilityList", disabilityList);

		empServiceFacade.batchEmpProcess(map);

	}

	@RequestMapping("hrs/emp/findEmpReport.do")
	ModelAndView findEmrReport(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HashMap<String, String> argsMap = new HashMap<String, String>();
		System.out.println("Check" + argsMap);

		String empno = request.getParameter("empCode");
		System.out.println(empno);
		argsMap.put("empNo", empno);

		List<EmpBean> list = empServiceFacade.selectEmpList(argsMap);

		JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(list);

		// // :: jasperReportsMultiFormatView를 활용하는 방법이다.
		// // :: 파라미터의 종류 : csv, pdf , xls , html
		ModelAndView mav = new ModelAndView();
		mav.setViewName("empReport-view");
		String format = request.getParameter("format");
		mav.addObject("format", "pdf");
		mav.addObject("source", source);

		return mav;

	}

	/*
	 * @RequestMapping("hrs/emp/selectEmpList.do") public void
	 * selectEmpList(HttpServletRequest request, HttpServletResponse response)
	 * throws Exception { PlatformData outData = (PlatformData)
	 * request.getAttribute("outData"); PlatformData inData = (PlatformData)
	 * request.getAttribute("inData"); //Map<String, String> argsMap =
	 * datasetBeanMapper.variablesToMap(inData); //System.out.println("Check" +
	 * argsMap);
	 * 
	 * List<EmpBean> list = empServiceFacade.selectEmpList();
	 * //System.out.println("list:"+list);
	 * 
	 * List<CareerBean> careerList = new ArrayList<CareerBean>();
	 * List<DisabilityBean> disabilityList = new ArrayList<DisabilityBean>();
	 * List<EducaBean> educationList = new ArrayList<EducaBean>();
	 * List<FamilyBean> familyList = new ArrayList<FamilyBean>();
	 * List<LicenseBean> licenseList = new ArrayList<LicenseBean>();
	 * List<MilitaryBean> militaryList = new ArrayList<MilitaryBean>();
	 * List<PerconaldateBean> perconaldateList = new
	 * ArrayList<PerconaldateBean>();
	 * 
	 * for (EmpBean empBean : list) {
	 * 
	 * List<CareerBean> careerBeanList = empBean.getCareerList(); if
	 * (careerBeanList != null) careerList.addAll(careerBeanList);
	 * 
	 * List<DisabilityBean> disabilityBeanList = empBean.getDisabilityList(); if
	 * (disabilityBeanList != null) disabilityList.addAll(disabilityBeanList);
	 * 
	 * List<EducaBean> educationBeanList = empBean.getEducationBeanList(); if
	 * (educationBeanList != null) educationList.addAll(educationBeanList);
	 * 
	 * List<FamilyBean> familyBeanList = empBean.getFamilyList(); if
	 * (familyBeanList != null) familyList.addAll(familyBeanList);
	 * 
	 * List<LicenseBean> licenseBeanList = empBean.getLicenseList(); if
	 * (licenseBeanList != null) licenseList.addAll(licenseBeanList);
	 * 
	 * List<MilitaryBean> militaryBeanList = empBean.getMilitaryList(); if
	 * (militaryBeanList != null) militaryList.addAll(militaryBeanList);
	 * 
	 * List<PerconaldateBean> perconaldateBeanList =
	 * empBean.getPerconaldateList(); if (perconaldateBeanList != null)
	 * perconaldateList.addAll(perconaldateBeanList); }
	 * 
	 * datasetBeanMapper.beansToDataset(outData, list, EmpBean.class);
	 * 
	 * datasetBeanMapper.beansToDataset(outData, careerList, CareerBean.class);
	 * datasetBeanMapper.beansToDataset(outData, disabilityList,
	 * DisabilityBean.class); datasetBeanMapper.beansToDataset(outData,
	 * educationList, EducaBean.class);
	 * datasetBeanMapper.beansToDataset(outData, familyList, FamilyBean.class);
	 * datasetBeanMapper.beansToDataset(outData, licenseList,
	 * LicenseBean.class); datasetBeanMapper.beansToDataset(outData,
	 * militaryList, MilitaryBean.class);
	 * datasetBeanMapper.beansToDataset(outData, perconaldateList,
	 * PerconaldateBean.class);
	 * 
	 * }
	 */
}
