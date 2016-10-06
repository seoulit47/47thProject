package com.seoulit.erp47.won.hosptlzPat.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzInsurPatException;
import com.seoulit.erp47.won.hosptlzPat.service.HosptlzServiceFacade;
import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;

/**
 *    AutoInsurController
 *
 * @Description    자보자격관리
 * @Author         박 영 희
 * Created on       2016. 10. 06
 *
 * 
 */

@Controller
public class AutoInsurController {
    @Autowired
    private HosptlzServiceFacade hosptlzServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
    private PlatformData outData;
    private PlatformData inData;
    private Map<String, String> argsMap;
	
	
    //자보자격관리목록조회
    @SuppressWarnings("unchecked")
    @RequestMapping("won/hosptlzInsurPat/findAutoInsurList.do")
    public void findAutoInsurList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        outData = (PlatformData) request.getAttribute("outData");
        inData = (PlatformData) request.getAttribute("inData");
        
        String patNo = inData.getVariable("patNo").getString();
       
        List<AutoInsurBean> autoInsurBeans = hosptlzServiceFacade.findAutoInsurList(patNo);
        dataSetBeanMapper.beansToDataset(outData, autoInsurBeans, AutoInsurBean.class);
    }
    //자보자격목록 일괄처리

    @RequestMapping("won/hosptlzInsurPat/batchAutoInsurList.do")
    public void batchAutoInsurList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        inData = (PlatformData) request.getAttribute("inData");
        outData = (PlatformData) request.getAttribute("outData");
        List<AutoInsurBean>  autoInsurBeans = dataSetBeanMapper.datasetToBeans(inData, AutoInsurBean.class);
        try {
            hosptlzServiceFacade.batchAutoInsurList(autoInsurBeans);
        } catch (HosptlzInsurPatException e) {
            outData.getVariableList().add("exceptionMsg", e.getMessage());
        }

       
    }
}
