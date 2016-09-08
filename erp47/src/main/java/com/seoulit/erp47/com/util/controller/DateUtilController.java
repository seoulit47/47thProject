package com.seoulit.erp47.com.util.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.util.service.UtilServiceFacade;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.com.util.controller
 * @Class    DateUtilController.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description 날짜관련 유틸리티 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class DateUtilController {

    @Autowired
    private UtilServiceFacade commUtilServiceFacade;
    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("com/findDate.do")
    public void findDate(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        String sdate = commUtilServiceFacade.findDate(argsMap);
        dataSetBeanMapper.addVariable(outData, "serverDate", sdate);
    }
}
