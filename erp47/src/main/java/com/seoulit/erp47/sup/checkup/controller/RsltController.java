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
import com.seoulit.erp47.sup.checkup.to.ReceiptBean;
import com.seoulit.erp47.sup.checkup.to.RsltBean;

/**
 * @Package  com.seoulit.erp47.sup.checkup.controller
 * @Class    RsltController.java
 * @Create   2016. 09. 19.
 * @Author   김진환
 * @Description   결과관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 19. 
 */

@Controller
public class RsltController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        SupCheckupServiceFacade supCheckupServiceFacade;
    
    /* 종합검진 결과관리 - 검진자조회 */
    @RequestMapping("sup/checkup/findReceiptList.do")
    public void findReceiptList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<ReceiptBean> receiptList = supCheckupServiceFacade.findReceiptList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, receiptList, ReceiptBean.class);
    }
    
    /* 종합검진 결과관리 - 결과조회 */
    @RequestMapping("sup/checkup/findRsltList.do")
    public void findRsltList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

        List<RsltBean> rsltList = supCheckupServiceFacade.findRsltList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, rsltList, RsltBean.class);

    }
    
    /* 종합검진 결과관리 - 저장 */
    @RequestMapping("sup/checkup/registerRslt.do")
    public void registerReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<RsltBean> rsltList= dataSetBeanMapper.datasetToBeans(inData, RsltBean.class);

        supCheckupServiceFacade.registerRslt(rsltList);
    }
}