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
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;

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

}
