package com.seoulit.erp47.won.baseInfo.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.baseInfo.service.BaseServiceFacade;
import com.seoulit.erp47.won.baseInfo.to.ExpTgmBean;


@Controller
public class ExpTgmController {

    @Autowired
    public BaseServiceFacade baseServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("won/base/findExpTgmList.do")
    public void findExpTgmList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<ExpTgmBean> expTgmBeanList = baseServiceFacade.findExpTgmList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, expTgmBeanList, ExpTgmBean.class);
    }

    @RequestMapping("won/base/batchExpTgmProcess.do")
    public void batchExpTgmProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<ExpTgmBean> expTgmBeanList = dataSetBeanMapper.datasetToBeans(inData,
                ExpTgmBean.class);
        baseServiceFacade.batchExpTgmProcess(expTgmBeanList);
        dataSetBeanMapper.beanToDataset(outData, new ExpTgmBean(), ExpTgmBean.class);
    }

}