package com.seoulit.erp47.sup.checkup.controller;

import java.util.ArrayList;
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
import com.seoulit.erp47.sup.checkup.service.SupCheckupServiceFacade;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.ReceiptBean;
import com.seoulit.erp47.sup.checkup.to.ReducBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.his.sup.checkup.controller
 * @Class    ReceiptController.java
 * @Create   2016. 09. 11.
 * @Author   김진환
 * @Description   접수관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 11. 
 */

@Controller
public class ReceiptController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    
    @Autowired
    SupCheckupServiceFacade supCheckupServiceFacade;
    
    /* 종합검진 접수 - 접수, 예약조회 */
    @SuppressWarnings("unchecked")
    @RequestMapping("sup/checkup/findRsvtReceiptList.do")
    public void findRsvtReceiptList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        Map<String, Object> map = supCheckupServiceFacade.findRsvtReceiptList(argsMap);
        
        List<RsvtBean> rsvtList = (List<RsvtBean>) map.get("rsvtList");
        List<ReceiptBean> receiptList = (List<ReceiptBean>) map.get("receiptList");

        dataSetBeanMapper.beansToDataset(outData, receiptList, ReceiptBean.class);
        dataSetBeanMapper.beansToDataset(outData, rsvtList, RsvtBean.class);
    }
     
    /* 종합검진 접수 - 감면조회 */
    @RequestMapping("sup/checkup/findReducList.do")
    public void findReducList(HttpServletRequest request, HttpServletResponse response)throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<ReducBean> reducList = supCheckupServiceFacade.findReducList(argsMap);
        
        dataSetBeanMapper.beansToDataset(outData, reducList, ReducBean.class);
    }
    
    /* 종합검진 접수 - 예약검사 조회 */
    @RequestMapping("sup/checkup/findRsvtInspList.do")
    public void findRsvtInspList(HttpServletRequest request, HttpServletResponse response)throws Exception {
        
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        
        List<InspBean> pckInspList = new ArrayList<InspBean>();
        List<ChoInspBean> choInspList = new ArrayList<ChoInspBean>();

        RsvtBean rsvtBean = supCheckupServiceFacade.findRsvtInspList(argsMap);
        
        if (rsvtBean == null) {
            rsvtBean = new RsvtBean();
        } else {
            pckInspList = rsvtBean.getPckInspList();
            choInspList = rsvtBean.getChoInspList();
        }
        
        dataSetBeanMapper.beansToDataset(outData, pckInspList, InspBean.class);
        dataSetBeanMapper.beansToDataset(outData, choInspList, ChoInspBean.class);
    }
    
    /* 종합검진 접수 - 접수 등록 */
    @RequestMapping("sup/checkup/registerReceipt.do")
    public void registerReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        
        ReceiptBean receiptBean= dataSetBeanMapper.datasetToBean(inData, ReceiptBean.class);
        supCheckupServiceFacade.registerReceipt(receiptBean);
    }
    
    /* 종합검진 접수 - 접수 취소 */
    @RequestMapping("sup/checkup/cancelReceipt.do")
    public void cancelReceipt(HttpServletRequest request, HttpServletResponse response) throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        ReceiptBean receiptBean = dataSetBeanMapper.datasetToBean(inData, ReceiptBean.class);

        supCheckupServiceFacade.cancelReceipt(receiptBean);
    }
    
    /* 종합검진 접수 - 접수 저장 */
    @RequestMapping("sup/checkup/batchReceiptProcess.do")
    public void batchReceiptProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        PlatformData inData = (PlatformData) request.getAttribute("inData");
        RsvtBean rsvtBean = dataSetBeanMapper.datasetToBean(inData, RsvtBean.class);
        
        List<ChoInspBean> choInspList= dataSetBeanMapper.datasetToBeans(inData, ChoInspBean.class);

        Map<String, Object> map = new HashMap<>();

        if(rsvtBean!=null){
            map.put("rsvtBean", rsvtBean);
        }
        
        if(choInspList.size() > 0){
            map.put("choInspList", choInspList);
        }
        
        supCheckupServiceFacade.batchReceiptProcess(map);
    }
    
    /* 종합검진 접수 - 선택한 검사 일괄처리 */
    @RequestMapping("sup/checkup/batchPckInspProcess.do")
    public void batchPckInspProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<InspBean> pckInspList = dataSetBeanMapper.datasetToBeans(inData, InspBean.class);
        supCheckupServiceFacade.batchPckInspProcess(pckInspList);
    }
}

