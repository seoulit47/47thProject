package com.seoulit.erp47.med.recipe.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class SurgCdController {
		@Autowired
		DataSetBeanMapper datasetBeanMapper;
	
		public void findSurgCdList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
				PlatformData inData =(PlatformData) request.getAttribute("inData");
				PlatformData outData =(PlatformData) request.getAttribute("outData");
			
			
				Map<String,String>argsMap=datasetBeanMapper.variablesToMap(inData);
		
				//10월3일에 마무리 하겠습니다. mickey
		}
}
