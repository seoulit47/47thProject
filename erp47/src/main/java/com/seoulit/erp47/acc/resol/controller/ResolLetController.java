package com.seoulit.erp47.acc.resol.controller;

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
import com.seoulit.erp47.acc.resol.service.ResolServiceFacade;
import com.seoulit.erp47.acc.resol.to.AppendFileBean;
import com.seoulit.erp47.acc.resol.to.JourBean;
import com.seoulit.erp47.acc.resol.to.PayRecBean;
import com.seoulit.erp47.acc.resol.to.ResolLetBean;
import com.seoulit.erp47.acc.vat.to.DetailTaxInvBean;
import com.seoulit.erp47.acc.vat.to.TaxInvBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class ResolLetController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    @Autowired
    ResolServiceFacade resolServiceFacade;
    
    @RequestMapping("acc/resol/findResolLetList.do")
    public void findResolLetList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData)request.getAttribute("outData");
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<ResolLetBean> resolLetList = resolServiceFacade.findResolLetList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, resolLetList, ResolLetBean.class);
    }
    
    @RequestMapping("acc/resol/getResolNo.do")
    public void getResolNo(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        System.out.println("asdasdasdasdsa");
        PlatformData outData = (PlatformData)request.getAttribute("outData");
        String resolNo;
        resolNo = resolServiceFacade.getResolNo();
        System.out.println("asdasdasd"+resolNo);
        dataSetBeanMapper.addVariable(outData, "resolNo", resolNo);
    }
    
    @RequestMapping("acc/resol/registerResolLet.do")
    public void registerResolLet(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        HashMap<String, Object> dataSetMap=new HashMap<String, Object>();
        ResolLetBean resolLetBean = dataSetBeanMapper.datasetToBean(inData,ResolLetBean.class);
        List<JourBean> jourList = dataSetBeanMapper.datasetToBeans(inData,JourBean.class);
        List<PayRecBean> payRecList = dataSetBeanMapper.datasetToBeans(inData,PayRecBean.class);
        List<TaxInvBean> TaxInvList = dataSetBeanMapper.datasetToBeans(inData,TaxInvBean.class);
        List<DetailTaxInvBean> detailTaxInvList = dataSetBeanMapper.datasetToBeans(inData, DetailTaxInvBean.class);
        List<TaxInvBean> tempTaxInvList = new ArrayList<TaxInvBean>();
        for (TaxInvBean tempTaxInvBean : TaxInvList) {
            List<DetailTaxInvBean> tempDetailTaxInvList = new ArrayList<DetailTaxInvBean>();
            for (DetailTaxInvBean detailTaxInvBean : detailTaxInvList) {
                if (tempTaxInvBean.getPubNo().equals(
                        detailTaxInvBean.getPubNo())) {
                    tempDetailTaxInvList.add(detailTaxInvBean);
                }
            }
            if (tempDetailTaxInvList.size() != 0) {
                tempTaxInvBean.setDetailTaxInvList(tempDetailTaxInvList);
            }
            tempTaxInvList.add(tempTaxInvBean);
        }
        dataSetMap.put("resolLetBean", resolLetBean);
        dataSetMap.put("jourList", jourList);
        dataSetMap.put("payRecList", payRecList);
        dataSetMap.put("taxInvList", tempTaxInvList);
        resolServiceFacade.registResolLet(dataSetMap);
    }
    
    @RequestMapping("acc/resol/batchResolLetProcess.do")
    public void batchResolLetProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        HashMap<String, Object> dataSetMap=new HashMap<String, Object>();
        ResolLetBean resolLetBean = dataSetBeanMapper.datasetToBean(inData,ResolLetBean.class);
        List<JourBean> jourList = dataSetBeanMapper.datasetToBeans(inData,JourBean.class);
        List<PayRecBean> payRecList = dataSetBeanMapper.datasetToBeans(inData,PayRecBean.class);
        List<TaxInvBean> TaxInvList = dataSetBeanMapper.datasetToBeans(inData,TaxInvBean.class);
        List<DetailTaxInvBean> detailTaxInvList = dataSetBeanMapper.datasetToBeans(inData, DetailTaxInvBean.class);
        List<TaxInvBean> tempTaxInvList = new ArrayList<TaxInvBean>();
        for (TaxInvBean tempTaxInvBean : TaxInvList) {
            List<DetailTaxInvBean> tempDetailTaxInvList = new ArrayList<DetailTaxInvBean>();
            for (DetailTaxInvBean detailTaxInvBean : detailTaxInvList) {
                if (tempTaxInvBean.getPubNo().equals(
                        detailTaxInvBean.getPubNo())) {
                    tempDetailTaxInvList.add(detailTaxInvBean);
                }
            }
            if (tempDetailTaxInvList.size() != 0) {
                tempTaxInvBean.setDetailTaxInvList(tempDetailTaxInvList);
            }
            tempTaxInvList.add(tempTaxInvBean);
        }
        dataSetMap.put("resolLetBean", resolLetBean);
        dataSetMap.put("jourList", jourList);
        dataSetMap.put("payRecList", payRecList);
        dataSetMap.put("taxInvList", tempTaxInvList);
        resolServiceFacade.batchResolLetProcess(dataSetMap);
    }
    
    @RequestMapping("acc/resol/findResolLetDetailList.do")
    public void findResolLetDetail(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        ResolLetBean resolLetBean = resolServiceFacade.findResolLetDetail(argsMap);
        List<JourBean> jourList = resolLetBean.getJourList();
        List<PayRecBean> payRecList = resolLetBean.getPayRecList();
        List<AppendFileBean> appendFileList = resolLetBean.getAppendFileList();
        dataSetBeanMapper.beansToDataset(outData, jourList, JourBean.class);
        dataSetBeanMapper.beansToDataset(outData, payRecList, PayRecBean.class);
        dataSetBeanMapper.beansToDataset(outData, appendFileList, AppendFileBean.class);
    }
}
