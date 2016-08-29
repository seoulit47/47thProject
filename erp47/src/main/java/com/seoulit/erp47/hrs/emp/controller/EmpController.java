package com.seoulit.erp47.hrs.emp.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.hrs.emp.service.EmpServiceFacade;
import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * @Package  com.seoulit.erp47.com.base.controller
 * @Class    LoginController.java
 * @Create   2016. 08. 26.
 * @Author   Hwanee
 * @Description 사원 컨트롤러
 *  	
 * @LastUpdated 
 */

@Controller
public class EmpController {

    @Autowired
    private EmpServiceFacade empServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("hrs/emp/findEmpList.do")
    public void findEmpList(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	PlatformData inData=(PlatformData) request.getAttribute("inData");
    	PlatformData outData=(PlatformData) request.getAttribute("outData");
    	
    	Map<String, String> argsMap  = datasetBeanMapper.variablesToMap(inData);
    	
    	List<EmpBean> empList=empServiceFacade.findEmpList(argsMap);
    	datasetBeanMapper.beansToDataset(outData, empList, EmpBean.class);
    }
}
