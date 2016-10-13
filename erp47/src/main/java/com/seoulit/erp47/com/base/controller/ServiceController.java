package com.seoulit.erp47.com.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.com.base.to.ServiceBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;


@Controller
public class ServiceController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("com/findService.do")
    public void findService(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        System.out.println("findService : controller");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
        List<ServiceBean> serviceBeanList = comBaseServiceFacade.findService(argsMap);
        datasetBeanMapper.beansToDataset(outData, serviceBeanList, ServiceBean.class);
    }

    @RequestMapping("com/batchErrorProcess.do")
    public void batchErrorProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<ServiceBean> service = datasetBeanMapper.datasetToBeans(inData, ServiceBean.class);
        comBaseServiceFacade.batchErrorProcess(service);
    }

}
