package com.seoulit.erp47.sup.checkup.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.checkup.service.SupCheckupServiceFacade;
import com.seoulit.erp47.sup.checkup.to.PckBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.controller
 * @Class    PckController.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   패키지관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Controller
public class PckController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        SupCheckupServiceFacade supCheckupServiceFacade;
    
    /* 종합검진 접수, 패키지관리 - 패키지 조회 */
    @RequestMapping("sup/checkup/findPckList.do")
    public void findPckList(HttpServletRequest request, HttpServletResponse response) throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<PckBean> pckList = supCheckupServiceFacade.findPckList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, pckList, PckBean.class);
    }
   
    
 
}