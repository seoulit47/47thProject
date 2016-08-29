package com.seoulit.erp47.com.base.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class CodeController {

	
	   @Autowired
	    private ComBaseServiceFacade comBaseServiceFacade;

	    @Autowired
	    private DataSetBeanMapper datasetBeanMapper;
	    
	    
	    @RequestMapping("com/findCodeList.do")
	    public void loginCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {

	    
	    	PlatformData inData = (PlatformData)request.getAttribute("inData");
	    	
	    	String codeName=inData.getVariable("codeName").getString();
	    	
	    	
	    	System.out.println(codeName);
	    	
	    	System.out.println("진환아 잘되니???"); 
	    }
	    
}
