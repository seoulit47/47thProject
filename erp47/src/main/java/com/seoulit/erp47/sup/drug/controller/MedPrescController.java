package com.seoulit.erp47.sup.drug.controller;

import java.util.ArrayList;
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
import com.seoulit.erp47.sup.drug.to.MedPrescBean;
import com.seoulit.erp47.sup.drug.to.PrescInfoBean;

/**
 * @Package  com.seoulit.erp47.sup.drug.controller
 * @Class    MedPrescController.java
 * @Create   2016. 09. 21.
 * @Author   YonG
 * @Description   약 처방관리 컨트롤러
 *
 * @LastUpdated  
 */

@Controller
public class MedPrescController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
    DrugServiceFacade drugServiceFacade;
    
    /* 약국 외래약, 병동약 처방관리 - 조회 */
    @RequestMapping("sup/drug/findMedPresc.do")
    public void findoutpaPresc(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<MedPrescBean> medPrescList = drugServiceFacade.findMedPresc(argsMap);
        List<PrescInfoBean> PrescInfoList = new ArrayList<PrescInfoBean>();
        
        for(MedPrescBean medPrescBean:medPrescList){
            PrescInfoList.addAll(medPrescBean.getPrescInfoList());
        }

        dataSetBeanMapper.beansToDataset(outData, medPrescList, MedPrescBean.class);
        dataSetBeanMapper.beansToDataset(outData, PrescInfoList, PrescInfoBean.class);

    }
    
    /* 약국 외래약, 병동약 처방관리 - 조제 */
    @RequestMapping("sup/drug/processMedication.do")
    public void processMedication(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<MedPrescBean> medPrescList = dataSetBeanMapper.datasetToBeans(inData, MedPrescBean.class);
        
        drugServiceFacade.processMedication(medPrescList);
    }

}