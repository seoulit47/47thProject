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
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.CodePopupBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.controller
 * @Class    InspController.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   검사관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Controller
public class InspController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        SupCheckupServiceFacade supCheckupServiceFacade;
    
    /* 종합검진 검사관리 - 패키지검사목록 조회 */
    @RequestMapping("sup/checkup/findPckInspList.do")
    public void findPckInspList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<InspBean> inspList = supCheckupServiceFacade.findPckInspList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, inspList, InspBean.class);
    }
    
    /* 종합검진 검사관리 - 검사목록 조회 */
    @RequestMapping("sup/checkup/findInspList.do")
    public void findInspList(HttpServletRequest request, HttpServletResponse response) throws Exception {   
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        /*
        for(String key : argsMap.keySet()) {
            System.out.println(key + " : " + argsMap.get(key));
        }
        */
        
        List<InspBean> inspList = supCheckupServiceFacade.findInspList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, inspList, InspBean.class);
    }
    
    /* 종합검진 검사관리 - 선택 검사목록 조회 */
    @RequestMapping("sup/checkup/findChoInspList.do")
    public void findChoInspList(HttpServletRequest request, HttpServletResponse response)throws Exception {
        
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
       
        List<ChoInspBean> choInspList = supCheckupServiceFacade.findChoInspList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, choInspList, ChoInspBean.class);
    }
    
    /* 종합검진 검사관리 - 선택 검사목록외 조회 */
    @RequestMapping("sup/checkup/findExChoInspList.do")
    public void findExChoInspList(HttpServletRequest request, HttpServletResponse response)throws Exception {
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<InspBean> exChoInspList=supCheckupServiceFacade.findExChoInspList(argsMap);
        System.out.println(exChoInspList);
        dataSetBeanMapper.beansToDataset(outData, exChoInspList, InspBean.class);
    }
    
    /* 종합검진 검사관리 - 처방코드 조회  */
    @RequestMapping("sup/checkup/findOcsCodeList.do")
    public void findOcsCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<CodePopupBean> odsCodeList = supCheckupServiceFacade.findOcsCodeList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, odsCodeList, CodePopupBean.class);
    }
    

    // 종합검진 검사관리 - 수정, 등록, 저장
    @RequestMapping("sup/checkup/batchInspProcess.do")
    public void batchInspProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<InspBean> inspList = dataSetBeanMapper.datasetToBeans(inData, InspBean.class);
        
        supCheckupServiceFacade.batchInspProcess(inspList);
    }   
   
}