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
import com.seoulit.erp47.sup.checkup.to.ReducBean;

/**
 * @Package  com.seoul.his.sup.checkup.controller
 * @Class    ReceiptController.java
 * @Create   2016. 09. 11.
 * @Author   김진환
 * @Description   접수관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 11. 
 */

@Controller
public class ReceiptController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
    SupCheckupServiceFacade supCheckupServiceFacade;
    
     
    /* 종합검진 접수 - 감면조회 */
    @RequestMapping("sup/checkup/findReducList.do")
    public void findReducList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<ReducBean> reducList = supCheckupServiceFacade.findReducList(argsMap);
        
        dataSetBeanMapper.beansToDataset(outData, reducList, ReducBean.class);
    }
    
    
}

