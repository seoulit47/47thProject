package com.seoulit.erp47.log.inpt.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.inpt.service.InptServiceFacade;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

/**
 * @Package com.seoul.his.log.inpt.controller
 * @Class InptController.java
 * @Create
 * @Author
 * @Description 기술검사내역, 검사대상물품, 계약관리 컨트롤러
 *	
 * @LastUpdated
 */
@Controller
public class InptController {

	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	@Autowired
	InptServiceFacade inptServiceFacade;

	@RequestMapping("log/inpt/findCtrtList.do")
	public void findCtrtList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		List<CtrtInfoBean> ctrtList = inptServiceFacade.findCtrtList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, ctrtList, CtrtInfoBean.class);
	}
	
	@RequestMapping("log/inpt/findCtrtHistList.do")
	public void findCtrtDetailList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		List<CtrtInfoDetailBean> ctrtInfoDetailList = inptServiceFacade.findCtrtDetailList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, ctrtInfoDetailList, CtrtInfoDetailBean.class);
	}
	
	@RequestMapping("log/inpt/findGdsInptList.do")
	public void findGdsInpt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		List<GdsInptBean> gdsInpt = inptServiceFacade.findGdsInpt(argsMap);
		
		for(GdsInptBean bean : gdsInpt){
			System.out.println("getCtrtNo : " + bean.getCtrtNo());
			System.out.println("getGdsInptNo : " + bean.getGdsInptNo());
			System.out.println("getAmt : " + bean.getAmt());
			System.out.println("getDelayGijunPay : " + bean.getDelayGijunPay());
		}
		
		datasetBeanMapper.beansToDataset(outData, gdsInpt, GdsInptBean.class);
	}
	
	@RequestMapping("log/inpt/findSkillExmntList.do")
	public void FindSkillExmntMngnt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		System.out.println(argsMap.get("startDate"));
		System.out.println(argsMap.get("endDate"));

		List<SkillExmntHistBean> SkillExmntHistlist = inptServiceFacade.skillExmntList(argsMap);

		datasetBeanMapper.beansToDataset(outData, SkillExmntHistlist, SkillExmntHistBean.class);
	}

	@RequestMapping("log/inpt/batchProcessSkillExmntHist.do")
	public void batchProcessSkillExmnt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<SkillExmntHistBean> skillExmntList = datasetBeanMapper.datasetToBeans(inData, SkillExmntHistBean.class);

		inptServiceFacade.batchProcessSkillExmnt(skillExmntList);
	}

}
