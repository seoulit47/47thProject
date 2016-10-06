package com.seoulit.erp47.won.hosptlzPat.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.won.hosptlzPat.service.HosptlzServiceFacade;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;



/**
 * @Package  com.seoul.his.won.hosptlzPat.controller
 * @Class    HosptlzRsvtController.java
 * @Create   2016.10.07
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Controller
public class HosptlzRsvtController {

	@Autowired
	private HosptlzServiceFacade hosptlzServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	private Map<String, String> argsMap;
	private PlatformData inData;
	private PlatformData outData;
	// 입원예약자 등록
	@RequestMapping("won/hosptlzPat/registerHosptlzRsvt.do")
	public void registerHosptlzRsvt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");

		List<HosptlzRsvtBean> hosptlzRsvt = dataSetBeanMapper.datasetToBeans(inData, HosptlzRsvtBean.class);
		hosptlzServiceFacade.registerHosptlzRsvt(hosptlzRsvt);
		System.out.println("===== 병실 =:  "+hosptlzRsvt.get(0).getHopeWard());
	}

	// 입원예약자 번호 생성
	@RequestMapping("won/hosptlzPat/callhosptlzRsvtSeq.do")
	public void callhosptlzRsvtSeq(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");

		String hosptlzRsvtNo = hosptlzServiceFacade.callhosptlzRsvtSeq();
		dataSetBeanMapper.addVariable(outData, "hosptlzRsvtNo", hosptlzRsvtNo);
	}

	// 입원예약자 조회
	@RequestMapping("won/hosptlzPat/findHosptlzRsvt.do")
	@SuppressWarnings("unchecked")
	public void findHosptlzRsvt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HosptlzRsvtBean> hosptlzRsvt = hosptlzServiceFacade.findHosptlzRsvt(argsMap);
		System.out.println("입원예약조회 여기타나요 ? 몇개입니까 예약내역이  : "+hosptlzRsvt.size());
		dataSetBeanMapper.beansToDataset(outData, hosptlzRsvt, HosptlzRsvtBean.class);
	}

	//입원예약자 변경(N -> Y)
	@RequestMapping("won/hosptlzPat/changeHosptlzRsvtYb.do")
	public void changeHosptlzRsvtYb(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");

		List<ReceiptInfoBean> receiptInfo = dataSetBeanMapper.datasetToBeans(inData, ReceiptInfoBean.class);
		hosptlzServiceFacade.changeHosptlzRsvtYb(receiptInfo);
	}

	//입원예정자 조회
	@RequestMapping("won/hosptlzPat/findHosptlzPrdstorList.do")
	@SuppressWarnings("unchecked")
	public void findHosptlzPrdstorList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HosptlzPrdstorBean> hosptlzPrdstorList = hosptlzServiceFacade.findHosptlzPrdstorList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hosptlzPrdstorList, HosptlzPrdstorBean.class);
	}

	//입원예정자 입원일 변경.
	@RequestMapping("won/hosptlzPat/batchProcessHosptlzRsvt.do")
	public void batchProcessHosptlzRsvt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		System.out.println("batchProcessHosptlzRsvt : 입원예약일및 예약병동병실 수정");
		   NexacroLogger.debug(inData.getDataSetList());//받은데이터 내역보기
		List<HosptlzPrdstorBean> hosptlzPrdstor = dataSetBeanMapper.datasetToBeans(inData, HosptlzPrdstorBean.class);
		hosptlzServiceFacade.batchProcessHosptlzRsvt(hosptlzPrdstor);
	}

	//입원예약상태 변경(Y->N)
	@RequestMapping("won/hosptlzPat/chanHosptlzRsvtYb.do")
	public void chanHosptlzRsvtYb(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");

		List<HosptlzPrdstorBean> hosptlzPrdstor = dataSetBeanMapper.datasetToBeans(inData, HosptlzPrdstorBean.class);
		hosptlzServiceFacade.chanHosptlzRsvtYb(hosptlzPrdstor);
	}



}
