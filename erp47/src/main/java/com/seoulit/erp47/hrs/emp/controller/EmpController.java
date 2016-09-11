package com.seoulit.erp47.hrs.emp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

		List<EmpBean> empList = empServiceFacade.findEmpList(argsMap);
		datasetBeanMapper.beansToDataset(outData, empList, EmpBean.class);
	}

	@RequestMapping("hrs/emp/selectEmpList.do")
	public void selectEmpList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		System.out.println("Check" + argsMap);
		List<EmpBean> list = empServiceFacade.findEmpList(argsMap);

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
}
