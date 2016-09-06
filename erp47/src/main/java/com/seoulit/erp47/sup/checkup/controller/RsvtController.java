package com.seoulit.erp47.sup.checkup.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.checkup.service.SupCheckupServiceFacade;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.controller
 * @Class    RsvtController.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   종합검진예약관리 컨트롤러
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Controller
public class RsvtController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	
	@Autowired
	SupCheckupServiceFacade supCheckupServiceFacade;
	
	@RequestMapping("sup/checkup/findRsvtList.do")
	public void findRsvtList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		 
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
	        
	    List<RsvtBean> rsvtList = supCheckupServiceFacade.findRsvtList(argsMap);
	    dataSetBeanMapper.beansToDataset(outData, rsvtList, RsvtBean.class);
	}
}
