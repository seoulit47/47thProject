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
import com.seoulit.erp47.won.baseInfo.to.HroomBean;
import com.seoulit.erp47.won.baseInfo.to.HroomListBean;


@Controller
public class HroomController {

    @Autowired
    public BaseServiceFacade baseServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("won/base/findHroomList.do")
    public void findHroomList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<HroomBean> hroomBeanList = baseServiceFacade.findHroomList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, hroomBeanList, HroomBean.class);
    }

    @RequestMapping("won/base/getHroomList.do")
    public void getHroomList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        System.out.println("getHroomList CON");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<HroomListBean> hroomBeanList = baseServiceFacade.getHroomList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, hroomBeanList, HroomListBean.class);
    }
    
    @RequestMapping("won/base/batchHroomProcess.do")
    public void batchHroomProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<HroomBean> hroomBeanList = dataSetBeanMapper.datasetToBeans(inData, HroomBean.class);
        baseServiceFacade.batchHroomProcess(hroomBeanList);
        dataSetBeanMapper.beanToDataset(outData, new HroomBean(), HroomBean.class);
    }

}