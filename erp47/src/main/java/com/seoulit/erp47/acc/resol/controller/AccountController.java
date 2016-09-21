package com.seoulit.erp47.acc.resol.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.acc.resol.service.ResolServiceFacade;
import com.seoulit.erp47.acc.resol.to.AccountBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class AccountController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    @Autowired
    ResolServiceFacade resolServiceFacade;
    
    @RequestMapping("acc/resol/findAccount.do")
    public void findAccount(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData)request.getAttribute("outData");
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<AccountBean> accountList = resolServiceFacade.findAccount(argsMap);
        dataSetBeanMapper.beansToDataset(outData, accountList, AccountBean.class);
    }
}
