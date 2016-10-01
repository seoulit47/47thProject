package com.seoulit.erp47.med.adr.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;

@Controller
public class AdrController {

	@RequestMapping("med/adr/findAdrList.do")
	public void findAdrList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		
	
		System.out.println("adr의 findAdrList매서드입니다.");
		
	}
	
}
