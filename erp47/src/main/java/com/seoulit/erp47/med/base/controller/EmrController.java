package com.seoulit.erp47.med.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

/**
 * @Package  com.seoulit.erp47.med.base.controller
 * @Class    EmrController.java
 * @Create   
 * @Author   
 * @Description 진료처방기초 EMR 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class EmrController {
    
    @Autowired
    EmrServiceFacade emrServiceFacade;
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;

    //처방상세 리스트 조회
    @RequestMapping("med/base/findPrscList.do")
    public void findPrscList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

        List<PrscBean> prscList = emrServiceFacade.findPrscList(argsMap);
        List<PrscDtlBean> prscDtlList = emrServiceFacade.findPrscDtlList(argsMap);
        
        dataSetBeanMapper.beansToDataset(outData, prscList, PrscBean.class);
        dataSetBeanMapper.beansToDataset(outData, prscDtlList, PrscDtlBean.class);
    }

}
