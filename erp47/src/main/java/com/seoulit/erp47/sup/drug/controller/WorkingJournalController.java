package com.seoulit.erp47.sup.drug.controller;

import java.util.HashMap;
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
import com.seoulit.erp47.sup.drug.to.MedicationPrescBean;
import com.seoulit.erp47.sup.drug.to.PrescErrorBean;
import com.seoulit.erp47.sup.drug.to.WorkingJournalBean;

/**
 * @Package  		com.seoulit.erp47.sup.drug.controller
 * @Class   		WorkingJournalController.java
 * @Create   		2016. 09. 22.
 * @Author   		YonG
 * @Description   	근무일지관리 컨트롤러
 *
 * @LastUpdated   
 */

@Controller
public class WorkingJournalController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
    DrugServiceFacade drugServiceFacade;

    /* 약국 근무일지 관리 - 조회 */
    @RequestMapping("sup/drug/findWorkingJournal.do")
    public void findWorkingJournal(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        WorkingJournalBean workingJournalBean = drugServiceFacade.findWorkingJournal(argsMap);
        List<PrescErrorBean> PrescErrorList = workingJournalBean.getPrescErrorList();

        dataSetBeanMapper.beanToDataset(outData, workingJournalBean, WorkingJournalBean.class);
        dataSetBeanMapper.beansToDataset(outData, PrescErrorList, PrescErrorBean.class);   
    }
    
    /* 약국 근무일지 관리 - 일괄처리 */
    @RequestMapping("sup/drug/batchWorkingJournalProcess.do")
    public void batchWorkingJournalProcess(HttpServletRequest request, HttpServletResponse response) 
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");

        List<WorkingJournalBean> workingJournalList = dataSetBeanMapper.datasetToBeans(inData, WorkingJournalBean.class);
        List<PrescErrorBean> prescErrorList = dataSetBeanMapper.datasetToBeans(inData, PrescErrorBean.class);
        
        Map<String, Object> map = new HashMap<>();

        if(workingJournalList!=null){
            map.put("workingJournalBean", workingJournalList);
        }
        
        if(prescErrorList.size() > 0){
            map.put("prescErrorList", prescErrorList);
        }
        
        drugServiceFacade.batchWorkingJournalProcess(map);
    }
    
    /* 약국 근무일지 관리 - 조제목록 조회 */
    @RequestMapping("sup/drug/findMedPrescList.do")
    public void findMedPrescList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

        List<MedicationPrescBean> medPrescList = drugServiceFacade.findMedPrescList(argsMap);

        dataSetBeanMapper.beansToDataset(outData, medPrescList, MedicationPrescBean.class);
    }
}