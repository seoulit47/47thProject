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
import com.seoulit.erp47.sup.checkup.to.ReceBean;

/**
 * @Package  com.seoulit.erp47.sup.checkup.controller
 * @Class    ReceController.java
 * @Create   2016. 09. 09.
 * @Author   김진환
 * @Description   수납관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 09. 
 */

@Controller
public class ReceController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        SupCheckupServiceFacade supCheckupServiceFacade;

    // 종합검진 접수 - 수납내역 조회
    @RequestMapping("sup/checkup/findReceList.do")
    public void findReceList(HttpServletRequest request, HttpServletResponse response) 
            throws Exception {
        
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<ReceBean> receList= supCheckupServiceFacade.findReceList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, receList, ReceBean.class);

    }
    
    // 종합검진 접수 - 수납 - 카드 승인
    @RequestMapping("sup/checkup/registerRece.do")
    public void registerRece(HttpServletRequest request, HttpServletResponse response) throws Exception {
        
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        System.out.println(inData.saveXml()+"~!@~@");
        ReceBean receBean= dataSetBeanMapper.datasetToBean(inData, ReceBean.class);
        supCheckupServiceFacade.registerRece(receBean);
    	
    }
    
}