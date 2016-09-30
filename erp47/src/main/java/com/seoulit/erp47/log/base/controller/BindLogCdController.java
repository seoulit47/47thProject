package com.seoulit.erp47.log.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.base.service.LogBaseServiceFacade;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;

@Controller
public class BindLogCdController {

	@Autowired
	private LogBaseServiceFacade logBaseServiceFacade;

	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("/log/base/bindLogCd.do")
	public void bindLogCd(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<BindLogCdBean> bindLogCdList = datasetBeanMapper.datasetToBeans(inData, BindLogCdBean.class);

		Map<String, List<OutLogCdBean>> bindLogCdMap = logBaseServiceFacade.BindLogCd(bindLogCdList);

		datasetBeanMapper.bindLogCd(outData, bindLogCdMap, bindLogCdList, OutLogCdBean.class);

	}

}
