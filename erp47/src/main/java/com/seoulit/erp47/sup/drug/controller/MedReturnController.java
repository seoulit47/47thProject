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
import com.seoulit.erp47.sup.drug.to.MedicationBean;

/**
 * @Package  		com.seoulit.erp47.sup.drug.controller
 * @Class    		MedReturnController.java
 * @Create   		2016. 09. 21.
 * @Author   		YonG
 * @Description   	약 반납관리 컨트롤러
 *
 * @LastUpdated  
 */

@Controller
public class MedReturnController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
        DrugServiceFacade drugServiceFacade;
    
    /* 약국 약 반납관리 - 조회 */
    @RequestMapping("sup/drug/findMedicationList.do")
    public void findMedicationList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<MedicationBean> MedicationList = drugServiceFacade.findMedicationList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, MedicationList, MedicationBean.class);
    }
    
    /* 약국 약 반납관리 - 반납 */
    @RequestMapping("sup/drug/processMedReturn.do")
    public void processMedReturn(HttpServletRequest request, HttpServletResponse response) 
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");

        List<MedicationBean> MedicationList = dataSetBeanMapper.datasetToBeans(inData, MedicationBean.class);
        drugServiceFacade.processMedReturn(MedicationList);

    }
}