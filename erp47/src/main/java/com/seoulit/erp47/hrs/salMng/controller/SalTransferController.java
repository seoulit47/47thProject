package com.seoulit.erp47.hrs.salMng.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.salMng.service.SalMngServiceFacade;
import com.seoulit.erp47.hrs.salMng.to.SalTransfBean;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.controller
 * @Class    SalTransferController.java
 * @Create   2016. 9. 29.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class SalTransferController {
	@Autowired
	public SalMngServiceFacade salMngServiceFacade;

	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;

	@RequestMapping("hrs/salMng/findSalTransfList.do")
	public void findSalTransfList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<SalTransfBean> salTransfList = salMngServiceFacade.findSalTransfList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, salTransfList, SalTransfBean.class);
	}
}
