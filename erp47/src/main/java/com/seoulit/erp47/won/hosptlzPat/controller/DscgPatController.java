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
import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;

/**
 * DscgPatController
 *
 * @Description   퇴원환자조회 및 퇴원일 수정
 * @Author         박 영 희
 * Created on         2016. 10. 08.
 */

@Controller
public class DscgPatController {
	@Autowired
	private HosptlzServiceFacade hosptlzServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
    private PlatformData outData;
    private PlatformData inData;
    private Map<String, String> argsMap;

	//퇴원환자 조회
	@RequestMapping("won/hosptlzPat/findDscgPatList.do")
	public void findDscgPatList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<DscgPatBean> DscgPatlist = hosptlzServiceFacade.findDscgPatList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, DscgPatlist, DscgPatBean.class);
	}
	//퇴원일자수정
	@RequestMapping("won/hosptlzPat/modDscgDay.do")
	public void modDscgDay(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");
		List<DscgPatBean> dscgPat = dataSetBeanMapper.datasetToBeans(inData, DscgPatBean.class);
		hosptlzServiceFacade.modDscgDay(dscgPat);
	}

}


