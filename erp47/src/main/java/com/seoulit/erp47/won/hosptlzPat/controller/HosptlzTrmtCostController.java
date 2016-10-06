package com.seoulit.erp47.won.hosptlzPat.controller;

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
import com.seoulit.erp47.won.hosptlzPat.service.HosptlzServiceFacade;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzTrmtCostBean;

/**
 * @Package com.seoul.his.won.hosptlzPat
 * @Class HosptlzTrmtCostController.java
 * @Create 2016.10.12
 * @Author 박 영 희
 * @Description 입원환자 진료비관리
 * @LastUpdated
 */
@Controller
public class HosptlzTrmtCostController {

    @Autowired
    private HosptlzServiceFacade hosptlzServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("won/hosptlzTrmtCost/findHosptlzTrmtCost.do")
    public void findHosptlzTrmtCost(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData;
        outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData;
        inData = (PlatformData) request.getAttribute("inData");
        Map<String, String> argsMap;
        argsMap = dataSetBeanMapper.variablesToMap(inData);

        List<HosptlzPatBean> hosptlzPatList;
        hosptlzPatList = hosptlzServiceFacade.findHosptlzTrmtCost(argsMap);
        dataSetBeanMapper.beansToDataset(outData, hosptlzPatList, HosptlzPatBean.class);

        List<HosptlzTrmtCostBean> tempHosptlzTrmtCosList = new ArrayList<HosptlzTrmtCostBean>();
        for (HosptlzPatBean hosptlzPatBean : hosptlzPatList) {
            List<HosptlzTrmtCostBean> hosptlzTrmtCostList;
            hosptlzTrmtCostList = hosptlzPatBean.getHosptlzTrmtCostList();
            tempHosptlzTrmtCosList.addAll(hosptlzTrmtCostList);
        }
        dataSetBeanMapper.beansToDataset(outData, tempHosptlzTrmtCosList,
                HosptlzTrmtCostBean.class);
    }

    @RequestMapping("won/hosptlzTrmtCost/calcuHosptlzTrmtCost.do")
    public void calcuHosptlzTrmtCost(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        Map<String, String> argsMap;
        PlatformData inData;
        inData = (PlatformData) request.getAttribute("inData");
        argsMap = dataSetBeanMapper.variablesToMap(inData);

        hosptlzServiceFacade.calcuHosptlzTrmtCost(argsMap);
    }

    @RequestMapping("won/hosptlzTrmtCost/findHosptlzPatRece.do")
    public void findHosptlzPatRece(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData;
        outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData;
        inData = (PlatformData) request.getAttribute("inData");
        Map<String, String> argsMap;
        argsMap = dataSetBeanMapper.variablesToMap(inData);

        HosptlzPatReceBean hosptlzPatReceBean;
        hosptlzPatReceBean = hosptlzServiceFacade.findHosptlzPatRece(argsMap);

        dataSetBeanMapper.beanToDataset(outData, hosptlzPatReceBean, HosptlzPatReceBean.class);
    }

    @RequestMapping("won/hosptlzTrmtCost/callHosptlzPatRece.do")
    public void callHosptlzPatRece(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData;
        inData = (PlatformData) request.getAttribute("inData");

        HosptlzPatReceBean hosptlzPatReceBean;
        hosptlzPatReceBean = dataSetBeanMapper.datasetToBean(inData, HosptlzPatReceBean.class);

        hosptlzServiceFacade.callHosptlzPatRece(hosptlzPatReceBean);
        findHosptlzPatRece(request, response);
    }

}
