package com.seoulit.erp47.log.base.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.base.service.LogBaseServiceFacade;


@Controller
public class CustController {


	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	
	@Autowired
	LogBaseServiceFacade logBaseServiceFacade;
	
	
	@RequestMapping("/log/base/findCustList.do")
	public void findCustList(HttpServletRequest request,HttpServletResponse response)throws Exception{
			
			
		System.out.println("거래처컨트롤러");
	}
	
}
