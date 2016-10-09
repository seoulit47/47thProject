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
import com.seoulit.erp47.won.baseInfo.to.JwjBean;

/**
 * @Package com.seoul.his.won.base.controller
 * @Class JwjController.java
 * @Create 2016. 10. 9.
 * @Author 박 영 희
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class JwjController {

    @Autowired
    public BaseServiceFacade baseServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    // 재원환자조회
    @RequestMapping("won/base/findJwjList.do")
    public void findJwjList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<JwjBean> JwjBeanList = baseServiceFacade.findJwjList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, JwjBeanList, JwjBean.class);
    }
}
