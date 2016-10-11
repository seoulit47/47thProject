package com.seoulit.erp47.log.prcs.controller;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.prcs.service.PrcsServiceFacade;
import com.seoulit.erp47.log.prcs.to.PrcsReceiptBean;

/**
 * @Package com.seoulit.erp47.log.prcs.controller
 * @Class LP_PrcsReceiptController.java
 * @Create 
 * @Author 김성호
 * @Description 구매접수관리 컨트롤러
 *
 * @LastUpdated
 */

@Controller
public class PrcsReceiptController {

    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    @Autowired
    PrcsServiceFacade prcsServiceFacade;

    @RequestMapping("log/prcs/findAnspList.do")
    public void findGdsAnspList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<GdsAnspBean> anspBeanList = prcsServiceFacade.findAnspList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, anspBeanList, GdsAnspBean.class);
    }

    @RequestMapping("log/prcs/findAnspHistList.do")
    public void findGdsAnspHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        String gdsAnspNo = inData.getVariable("GDS_ANSP_NO").getString();
        GdsAnspHistBean anspHistBean = new GdsAnspHistBean();
        anspHistBean.setGdsAnspNo(gdsAnspNo);
        List<GdsAnspHistBean> anspHistBeanList = prcsServiceFacade.findAnspHistList(anspHistBean);
        dataSetBeanMapper.beansToDataset(outData, anspHistBeanList, GdsAnspHistBean.class);
    }

    //수정중
    @RequestMapping("log/prcs/findPrcsReceiptList.do")
    public void findPrcsReceiptList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        System.out.println("map에 뭐가 없네 ? 어이가 없네 ?");
        for (Entry<String, String> entry : argsMap.entrySet()) {
        	System.out.println("key : " + entry.getKey());
        	System.out.println("val : " + entry.getValue());
       	}
        
        List<PrcsReceiptBean> prcsReceiptBeanList = prcsServiceFacade.findPrcsReceiptList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, prcsReceiptBeanList, PrcsReceiptBean.class);
    }

    @RequestMapping("log/prcs/batchPrcsReceiptProcess.do")
    public void batchPrcsReceiptProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<PrcsReceiptBean> prcsReceiptBeanList = dataSetBeanMapper.datasetToBeans(inData, PrcsReceiptBean.class);
        
        
        for(PrcsReceiptBean bean : prcsReceiptBeanList){
        	System.out.println("getGdsAnspNo : " + bean.getGdsAnspNo());
        	System.out.println("getAnspHistNo : " + bean.getAnspHistNo());
        	System.out.println("getBuyReceiptNo : " + bean.getBuyReceiptNo());
        }
        
        
        prcsServiceFacade.batchPrcsReceiptProcess(prcsReceiptBeanList);
    }

}
