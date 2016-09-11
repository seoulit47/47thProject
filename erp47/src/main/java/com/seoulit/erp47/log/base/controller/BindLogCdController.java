package com.seoulit.erp47.log.base.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BindLogCdController {

	
	
	
	@RequestMapping("/log/base/bindLogCd.do")
	public void bindLogCd(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		
			System.out.println("물류코드컨트롤러");
		
	}

}
