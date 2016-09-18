package com.seoulit.erp47.sup.nutritive.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.nutritive.service.NutritiveServiceFacade;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

/**
 * @Package com.seoulit.erp47.sup.nutritive.controller
 * @Class CarteController.java
 * @Create 2016. 09. 12.
 * @Author YonG
 * @Description 식단 컨트롤러
 *
 * @LastUpdated 
 */

@Controller
public class CarteController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	@Autowired
	NutritiveServiceFacade nutritiveServiceFacade;

	/* 영양관리 식단 관리 - 코드조회 */
	@RequestMapping("sup/nutritive/findDivList.do")

	public void findDivList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData outData = (PlatformData) request.getAttribute("outData");

		List<NCodeBean> divList = nutritiveServiceFacade.findDivList();

		dataSetBeanMapper.beansToDataset(outData, divList, NCodeBean.class);
	}
	
}