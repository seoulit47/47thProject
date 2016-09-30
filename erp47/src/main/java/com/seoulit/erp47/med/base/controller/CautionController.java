package com.seoulit.erp47.med.base.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;

@Controller
public class CautionController {


	
		@RequestMapping("med/base/findOrdList.do")
		public void findOrdList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
			
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
		
			System.out.println("med처방조회 토욜 오전에 하겠습니당 !");
		
		}
	
	
		
	
}
