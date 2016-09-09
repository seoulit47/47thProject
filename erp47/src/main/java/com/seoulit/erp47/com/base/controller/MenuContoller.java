package com.seoulit.erp47.com.base.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.com.base.to.AuthBean;
import com.seoulit.erp47.com.base.to.MenuBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoulit.erp47.com.base.controller
 * @Class    MenuContoller.java
 * @Create   ??
 * @Author   김성호
 * @Description 메뉴 컨트롤러
 *
 * @LastUpdated 
 */

@Controller
public class MenuContoller {
	@Autowired
	private ComBaseServiceFacade comBaseServiceFacade;

	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("com/findAuthMenuList.do")
	public void findAuthMenuList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> codeName = datasetBeanMapper.variablesToMap(inData);

		List<MenuBean> menuList = comBaseServiceFacade.findAuthMenuList(codeName);
		
		datasetBeanMapper.beansToDataset(outData, menuList, MenuBean.class);
	}
	
	@RequestMapping("com/findAllMenu.do")
	public void findAllMenu(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<MenuBean> allMenu = comBaseServiceFacade.findAllMenu();
		
		datasetBeanMapper.beansToDataset(outData, allMenu, "dsAllMenu", MenuBean.class);
	}
	
	@RequestMapping("com/authMenuBatch.do")
	public void processAuthBatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<MenuBean> menuList = datasetBeanMapper.datasetToBeans(inData, MenuBean.class); 
		List<AuthBean> authList = datasetBeanMapper.datasetToBeans(inData, AuthBean.class);
		
		Map<String, List> map = new HashMap<String, List>();
		
		map.put("menuList", menuList);
		map.put("authList", authList);
		
		comBaseServiceFacade.BatchAuthAndMenu(map);
	}
}
