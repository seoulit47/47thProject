package com.seoulit.erp47.com.base.controller;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoulit.erp47.com.base.controller
 * @Class    AuthMgtController.java
 * @Create   2016. 08. 29.
 * @Author   성호
 * @Description 권한 콘트롤러
 *  	
 * @LastUpdated 
 */

@Controller
public class AuthMgtController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("com/authCheck.do")
    public void authCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	System.out.println("start Controller");
    	
    	
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> indate  = datasetBeanMapper.variablesToMap(inData);
        
        Map<String, Object> auth = null;
        
        //System.out.println("indate : ");
        
        try {
        	auth = comBaseServiceFacade.checkAuth(indate);
        } catch (IdNotFoundException | PwMissMatchException e) {
            outData.getVariableList().add("ExceptionMsg", e.getMessage());
        }

        //datasetBeanMapper.beanToDataset(outData, empBean, EmpBean.class);
        System.out.println("test End Countroller");
    }
}
