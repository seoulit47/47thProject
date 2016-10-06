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
import com.seoulit.erp47.won.hosptlzPat.service.HosptlzServiceFacade;
import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;

/**
 *    GooutStayoutController
 *
 * @Description    외출,외박 관리 (신청서 접수, 환자 외출/외박 관리)
 * @Author            박 영 희
 * Created on          2016. 10. 08
 */

@Controller
public class GooutStayoutController {
    @Autowired
    private HosptlzServiceFacade hosptlzServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
    private PlatformData outData;
    private PlatformData inData;
    private Map<String, String> argsMap;
	//입원환자 정보 조회
	@SuppressWarnings("unchecked")
	@RequestMapping("won/hosptlzPat/findHosptlzPat.do")
	public void findHosptlzPat(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HosptlzPatInfoBean> hosptlzPatInfo = hosptlzServiceFacade.findHosptlzPat(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hosptlzPatInfo, HosptlzPatInfoBean.class);
	}

	//외출&외박 신청서 등록.
	@RequestMapping("won/hosptlzPat/batchProcessGooutStayout.do")
	public void batchProcessGooutStayout(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");

		List<GooutStayoutBean> gooutStayout = dataSetBeanMapper.datasetToBeans(inData, GooutStayoutBean.class);
		hosptlzServiceFacade.batchProcessGooutStayout(gooutStayout);
	}

	//외출&외박 신청서 조회.
	@SuppressWarnings("unchecked")
	@RequestMapping("won/hosptlzPat/findGooutStayoutList.do")
	public void findGooutStayoutList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		 String patNo = inData.getVariable("patNo").getString();
		
		List<GooutStayoutBean> gooutStayoutList = hosptlzServiceFacade.findGooutStayoutList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, gooutStayoutList, GooutStayoutBean.class);
	}
}
