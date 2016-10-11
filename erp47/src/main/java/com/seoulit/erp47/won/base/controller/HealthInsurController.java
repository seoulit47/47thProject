package com.seoulit.erp47.won.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.base.service.BaseServiceFacade;
import com.seoulit.erp47.won.base.to.HealthInsurBean;


@Controller
public class HealthInsurController {

    @Autowired
    public BaseServiceFacade baseServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("won/base/findHealthInsurList.do")
    public void findHealthInsurList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<HealthInsurBean> healthInsurBeanList = baseServiceFacade
                .findHealthInsurList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, healthInsurBeanList, HealthInsurBean.class);
    }

    @RequestMapping("won/base/batchHealthInsurProcess.do")
    public void batchHealthInsurProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<HealthInsurBean> healthInsurBeanList = dataSetBeanMapper.datasetToBeans(inData,
                HealthInsurBean.class);
        baseServiceFacade.batchHealthInsurProcess(healthInsurBeanList);
        dataSetBeanMapper.beanToDataset(outData, new HealthInsurBean(), HealthInsurBean.class);
    }

}