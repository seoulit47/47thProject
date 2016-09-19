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
import com.seoulit.erp47.sup.checkup.to.DtInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;

/**
 * @Package  com.seoul.his.sup.checkup.controller
 * @Class    DtInspController.java
 * @Create   2016. 09. 18.
 * @Author   김진환 
 * @Description   세부검사관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 18. 
 */

@Controller
public class DtInspController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        SupCheckupServiceFacade supCheckupServiceFacade;
    
    // 종합검진 세부검사관리 - 검사 조회
    @RequestMapping("sup/checkup/findSimpleInspList.do")
    public void findSimpleInspList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        /*
        for(String key : argsMap.keySet()) {
            System.out.println(key + " : " + argsMap.get(key));
        }
        */
        
        List<InspBean> inspList = supCheckupServiceFacade.findSimpleInspList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, inspList, InspBean.class);
    }
    
    
    // 종합검진 세부검사관리, 패키지관리 - 세부검사 조회
    @RequestMapping("sup/checkup/findDtInspList.do")
    public void findDtInspList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
                
        List<DtInspBean> dtInspList = supCheckupServiceFacade.findDtInspList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, dtInspList, DtInspBean.class);
    }
    

    // 종합검진 세부검사관리 - 수정, 추가
    @RequestMapping("sup/checkup/batchDtInspProcess.do")
    public void batchDtInspProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<DtInspBean> dtInspList = dataSetBeanMapper.datasetToBeans(inData, DtInspBean.class);
        
        supCheckupServiceFacade.batchDtInspProcess(dtInspList);
    }   
    
}