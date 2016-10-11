package com.seoulit.erp47.med.base.controller;

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
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.med.base.service.EmrServiceFacade;
import com.seoulit.erp47.med.base.to.AntimicrobialBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.CutnRltnExmntBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatCutnHistBean;
import com.seoulit.erp47.med.base.to.VirusBean;

@Controller
public class CautionController {

	@Autowired
    EmrServiceFacade emrServiceFacade;
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    // 주의사항 항목 조회
    @RequestMapping("med/base/findCutnArticleList.do")
    public void findCutnArticleList(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	System.out.println("1");
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        System.out.println("2");
        List<CutnArticleBean> cutnArticleList = emrServiceFacade.findCutnArticle(argsMap);
        System.out.println(cutnArticleList);
        dataSetBeanMapper.beansToDataset(outData, cutnArticleList, CutnArticleBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
    // 주의사항 항목 BATCH
	@RequestMapping("med/base/batchCutnArticleProcess.do")
    public void batchCutnArticleProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<CutnArticleBean> cutnArticleList = dataSetBeanMapper.datasetToBeans(inData, CutnArticleBean.class);   // 주의사항 항목리스트
        emrServiceFacade.batchCutnArticleProcess(cutnArticleList);
    }
    
    // 주의사항 관련검사 조회
    @RequestMapping("med/base/findCutnRltnExmntList.do")
    public void findCutnRltnExmntList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<CutnRltnExmntBean> cutnRltnExmntList = emrServiceFacade.findCutnRltnExmntList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, cutnRltnExmntList, CutnRltnExmntBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
    // 주의사항 관련검사 조회 BATCH
    @RequestMapping("med/base/batchCutnRltnExmntProcess.do")
    public void batchCutnRltnExmntProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<CutnRltnExmntBean> cutnRltnExmntList = dataSetBeanMapper.datasetToBeans(inData,CutnRltnExmntBean.class);   
        emrServiceFacade.batchCutnRltnExmntProcess(cutnRltnExmntList);
    }
	
    // 환자 주의사항 조회
    @RequestMapping("med/base/findPatCutnList.do")
    public void findPatCutnList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<PatCutnBean> patCutnList = emrServiceFacade.findPatCutnList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, patCutnList, PatCutnBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
    // 환자 주의사항 수정내역 조회
    @RequestMapping("med/base/findPatCutnHistList.do")
    public void findPatCutnHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<PatCutnHistBean> patCutnHistList = emrServiceFacade.findPatCutnHistList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, patCutnHistList, PatCutnHistBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
    // 환자 주의사항, 수정내역 BATCH
	@RequestMapping("med/base/batchPatCutnProcess.do")
    public void batchPatCutnProcess (HttpServletRequest request, HttpServletResponse response) throws Exception{
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<PatCutnBean> patCutnList = dataSetBeanMapper.datasetToBeans(inData,PatCutnBean.class);              // 환자 주의사항 리스트
        List<PatCutnHistBean> patCutnHistList = dataSetBeanMapper.datasetToBeans(inData, PatCutnHistBean.class); // 환자 주의사항 수정내역 리스트
        Map<String, Object> patCautionMap = new HashMap<>();
        patCautionMap.put("patCutnList", patCutnList);
        patCautionMap.put("patCutnHistList", patCutnHistList);
        emrServiceFacade.batchPatCutnProcess(patCautionMap);
    }
	
	@RequestMapping("med/base/findOrdList.do")
    public void findOrdList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<OrdBean> ordList = emrServiceFacade.findOrdList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, ordList, OrdBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
	@RequestMapping("med/base/findSpeciesVirusList.do")
    public void findSpeciesVirusList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<VirusBean> VirusList = emrServiceFacade.findVirusList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, VirusList, VirusBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
	@RequestMapping("med/base/findVirusList.do")
    public void findVirusList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<VirusBean> virusList = emrServiceFacade.findVirusList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, virusList, VirusBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
	@RequestMapping("med/base/findAntimicrobialList.do")
    public void findAntimicrobialList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<AntimicrobialBean> antimicrobialList = emrServiceFacade.findAntimicrobialList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, antimicrobialList, AntimicrobialBean.class);
        NexacroLogger.debug(outData.getDataSetList());
    }
}
