package com.seoulit.erp47.com.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.com.base.to.AuthBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoulit.erp47.com.base.controller
 * @Class    AuthContoller.java
 * @Create   ??
 * @Author   김성호
 * @Description 권한관리 컨트롤러
 *
 * @LastUpdated 
 */

@Controller
public class AuthContoller {
	@Autowired
	private ComBaseServiceFacade comBaseMgtServiceFacade;

	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("com/findAuthList.do")
	public void findAuthList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> authName = datasetBeanMapper.variablesToMap(inData);

		List<AuthBean> authList = comBaseMgtServiceFacade.findAuthList(authName);
		
		datasetBeanMapper.beansToDataset(outData, authList, AuthBean.class);
	}
}
