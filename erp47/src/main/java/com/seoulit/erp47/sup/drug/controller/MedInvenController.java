package com.seoulit.erp47.sup.drug.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.drug.service.DrugServiceFacade;
import com.seoulit.erp47.sup.drug.to.MedInvenBean;

/**
 * @Package  		com.seoulit.erp47.sup.drug.controller
 * @Class    		MedInvenController.java
 * @Create   		2016. 09. 21.
 * @Author   		YonG
 * @Description   	약 재고관리 컨트롤러
 *
 * @LastUpdated   
 */

@Controller
public class MedInvenController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;

    @Autowired
    DrugServiceFacade drugServiceFacade;

    /* 약국 약품재고관리 - 조회 */
    @RequestMapping("sup/drug/findMedInven.do")
    public void findMedInven(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

        List<MedInvenBean> MedList = drugServiceFacade.findMedInven(argsMap);

        dataSetBeanMapper.beansToDataset(outData, MedList, MedInvenBean.class);

    }

}