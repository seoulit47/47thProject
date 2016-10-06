package com.seoulit.erp47.hrs.guntae.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.common.util.NexacroLogger;
import com.seoulit.erp47.hrs.guntae.service.GuntaeServiceFacade;
import com.seoulit.erp47.hrs.guntae.to.YeonchaBean;

/**
 * @Package  com.seoulit.erp47.hrs.guntae.controller
 * @Class    YeonchaController.java
 * @Create   2016. 9. 29.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 */
@RequestMapping("hrs/guntae")
@Controller
public class YeonchaController {

	@Autowired
	GuntaeServiceFacade guntaeServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

    // 각 사원 연차조회
	@RequestMapping("/findYeonchaList.do")

	public void findYeonchaList(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		NexacroLogger.debug(inData);
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<YeonchaBean> list = guntaeServiceFacade.findYeonchaList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, YeonchaBean.class);
	}

    //연차발생
	@RequestMapping("/createYeoncha.do")

	public void insertYeoncha(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
	    System.out.println("연차발생 controller");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		NexacroLogger.debug(inData);
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<YeonchaBean> list = guntaeServiceFacade.callYeoncha(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, YeonchaBean.class);
	}

}
