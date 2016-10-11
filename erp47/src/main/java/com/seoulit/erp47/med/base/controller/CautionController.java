package com.seoulit.erp47.med.base.controller;

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
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatCutnHistBean;
import com.seoulit.erp47.med.base.to.VirusBean;

@Controller
public class CautionController {

	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	@Autowired
	EmrServiceFacade emrServiceFacade;

	@RequestMapping("med/base/findOrdList.do")
	public void findOrdList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("Med findOrdList 메서드입니다");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		List<OrdBean> ordList = emrServiceFacade.findOrdList(argsMap);

		datasetBeanMapper.beansToDataset(outData, ordList, OrdBean.class);

	}

	@RequestMapping("med/base/findVirusList.do")
	public void findVirusList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("med findVirus 매서드입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		// code = 균속코드 , codeNm = 균속명
		
		

		List<VirusBean> virusList = emrServiceFacade.findVirusList(argsMap);
		
		for(VirusBean bean : virusList){
			System.out.println("Bacgencd : " + bean.getBaccd());
			System.out.println("Bacgennm : " + bean.getBacnm());
			System.out.println();
		}

		datasetBeanMapper.beansToDataset(outData, virusList, VirusBean.class);

	}

	@RequestMapping("med/base/findCutnArticleList.do")
	public void findCutnArticle(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("med / findCutnArticle 매서드입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		List<CutnArticleBean> cutnArticleList = emrServiceFacade.findCutnArticle(argsMap);

		datasetBeanMapper.beansToDataset(outData, cutnArticleList, CutnArticleBean.class);
	}

	@RequestMapping("med/base/batchCutnArticleProcess.do")
	public void batchCutnArticleProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("med / batchCutnArticleProcess 매서드입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<CutnArticleBean> cutnArticleList = datasetBeanMapper.datasetToBeans(inData, CutnArticleBean.class);
		emrServiceFacade.batchCutnArticleProcess(cutnArticleList);
	}

	@RequestMapping("med/base/findPatCutnList.do")
	public void findPatCutnList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 환자 주의사항 조회
		System.out.println("med / findPatCutnList 매서드 입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		List<PatCutnBean> patCutnList = emrServiceFacade.findPatCutnList(argsMap);

		datasetBeanMapper.beansToDataset(outData, patCutnList, PatCutnBean.class);

	}

	@RequestMapping("med/base/findPatCutnHistList.do")
	public void findPatCutnHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 환자 주의사항 수정내역 조회
		System.out.println("med / findPatCutnHistList 매서드 입니다");

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);

		List<PatCutnHistBean> patCutnHistList = emrServiceFacade.findPatCutnHistList(argsMap);

		// datasetBeanMapper.beansToDataset(outData, beanList, classType);
	}
}
