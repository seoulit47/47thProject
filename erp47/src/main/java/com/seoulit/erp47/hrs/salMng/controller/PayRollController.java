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
import com.seoulit.erp47.hrs.salMng.to.PayRollBean;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.controller
 * @Class    PayRollController.java
 * @Create   2016. 9. 29.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class PayRollController {
    
    @Autowired
    public SalMngServiceFacade salMngServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

	@RequestMapping("hrs/salMng/findPayrollList.do")
	public void findPayrollList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<PayRollBean> payRollList = salMngServiceFacade.findPayrollList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, payRollList, PayRollBean.class);
	}
}
