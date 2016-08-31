package com.seoulit.erp47.com.base.controller;

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
import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * @Package  com.seoulit.erp47.com.base.controller
 * @Class    LoginController.java
 * @Create   2016. 08. 26.
 * @Author   YonG
 * @Description 로그인 컨트롤러
 *  	
 * @LastUpdated 
 */

@Controller
public class LoginController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("com/loginCheck.do")
    public void loginCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap  = datasetBeanMapper.variablesToMap(inData);
       
       
        Map<String, Object> login = null;
        EmpBean empBean = null;
        try {
            login = comBaseServiceFacade.login(argsMap);
            empBean = (EmpBean) login.get("empInfo");
        } catch (IdNotFoundException | PwMissMatchException e) {
            outData.getVariableList().add("ExceptionMsg", e.getMessage());
        }

        datasetBeanMapper.beanToDataset(outData, empBean, EmpBean.class);
        
    }
}
