package com.seoulit.erp47.won.baseInfo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.baseInfo.service.BaseServiceFacade;
import com.seoulit.erp47.won.baseInfo.to.GijunInfoBean;
import com.seoulit.erp47.won.baseInfo.to.GijunInfoDetailBean;


@Controller
public class GijunController {

    @Autowired
    public BaseServiceFacade baseServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("won/base/findGijunInfoCodeList.do")
    public void findGijunInfoCodeList(HttpServletRequest request,HttpServletResponse response) throws Exception {
        System.out.println("findGijunInfoCodeList 컨트롤러");
        PlatformData outData = (PlatformData)request.getAttribute("outData");
        List<GijunInfoBean> gijunInfoList = baseServiceFacade.findGijunInfoCodeList();
        List<GijunInfoDetailBean> gijunInfoDetailList= new ArrayList<>();
        
        for(GijunInfoBean gijunInfoBean : gijunInfoList){
            gijunInfoDetailList.addAll(gijunInfoBean.getGijunInfoDetailList());
        }
        
        dataSetBeanMapper.beansToDataset(outData, gijunInfoList, GijunInfoBean.class);
        dataSetBeanMapper.beansToDataset(outData, gijunInfoDetailList, GijunInfoDetailBean.class);
    }
    
    @RequestMapping("won/base/findGijunInfoCode.do")
    public void findGijunInfoCode(HttpServletRequest request,HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        PlatformData outData = (PlatformData)request.getAttribute("outData");
        String gijunCd = inData.getVariable("gijunCd").getString();
        List<GijunInfoDetailBean> gijunInfoDetailList = baseServiceFacade.findGijunInfoCode(gijunCd);
        dataSetBeanMapper.beansToDataset(outData, gijunInfoDetailList, GijunInfoDetailBean.class);
    } 

    //일괄처리
    @RequestMapping("won/base/batchProcessGijunInfoData.do")
    public void batchProcessGijunInfoData(HttpServletRequest request,HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        List<GijunInfoBean> gijunCodeBeanList = dataSetBeanMapper.datasetToBeans(inData, GijunInfoBean.class);
        List<GijunInfoDetailBean> gijunCodeDetailBeanList = dataSetBeanMapper.datasetToBeans(inData, GijunInfoDetailBean.class);
        baseServiceFacade.batchGijunInfoProcess(gijunCodeBeanList);
        baseServiceFacade.batchGijunInfoSetProcess(gijunCodeDetailBeanList);
    }
}