package com.seoulit.erp47.sup.pathology.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.pathology.service.PathologyServiceFacade;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;

/**
 * @Package  com.seoulit.erp47.sup.pathology.controller
 * @Class    SLclinspeController.java
 * @Create   2016. 09. 19.
 * @Author   김진환
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class SLclinspeController {
    @Autowired
    PathologyServiceFacade pathologyServiceFacade;
    @Autowired
    DataSetBeanMapper datasetBeanMapper;

   
    // 검체번호 조회
    @RequestMapping("sup/pathology/findClinspeNoList.do")
    public void findClinspeNoList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<ClinspeBean> clinspeBlokBeanList = pathologyServiceFacade.findClinspeNoList();
        datasetBeanMapper.beansToDataset(outData, clinspeBlokBeanList, ClinspeBean.class);
    }
    

    // 검체블록 조회
    @RequestMapping("sup/pathology/findClinspeBlokList.do")
    public void findClinspeBlokList(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        String clinspeNo = inData.getVariable("clinspeNo").getString();

        SlClinspeBlokBean clinspeNoBean = new SlClinspeBlokBean();
        clinspeNoBean.setClinspeNo(clinspeNo);

        List<SlClinspeBlokBean> clinspeBlokBeanList = pathologyServiceFacade.findClinspeBlokList(clinspeNoBean);
        datasetBeanMapper.beansToDataset(outData, clinspeBlokBeanList, SlClinspeBlokBean.class);
    }

    // 검체슬라이드 조회
    @RequestMapping("sup/pathology/findClinspeSliList.do")
    public void findClinspeSliList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        String cliNo = inData.getVariable("CLINSPE_NO").getString();

        SlClinspeSliBean sliBean = new SlClinspeSliBean();
        sliBean.setClinspeNo(cliNo);

        List<SlClinspeSliBean> clinspeSliBeanList = pathologyServiceFacade.findClinspeSliList(sliBean);
        datasetBeanMapper.beansToDataset(outData, clinspeSliBeanList, SlClinspeSliBean.class);
    }
    
    // 검체정보 조회
    @RequestMapping("sup/pathology/findClinspeInfoList.do")
    public void findClinspeInfoList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        String clinspeNo = inData.getVariable("clinspeNo").getString();
        SlClinspeInfoBean clinspeInfoBean = new SlClinspeInfoBean();
        clinspeInfoBean.setClinspeNo(clinspeNo);

        List<SlClinspeInfoBean> clinspeInfoBeanList = pathologyServiceFacade.findClinspeInfoBeanList(clinspeInfoBean);
        datasetBeanMapper.beansToDataset(outData, clinspeInfoBeanList, SlClinspeInfoBean.class);
    }
    
    //검체인수확인
    @RequestMapping("sup/pathology/takeoverDeliveredClinspe.do")
    public void takeoverDeliveredClinspe(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        
    }
}
