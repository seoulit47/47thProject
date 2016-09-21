package com.seoulit.erp47.log.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.base.service.LogBaseServiceFacade;
import com.seoulit.erp47.log.base.to.WhBean;

@Controller
public class WhController {

	@Autowired
	DataSetBeanMapper datasetBeanMapper;
	
	@Autowired
	LogBaseServiceFacade logBaseServiceFacade;
	
	@RequestMapping("/log/base/findWhList")
	public void findWhList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		//창고목록조회메서드
		System.out.println("창고컨트롤러입니다 ");
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		
		Map<String,String>argsMap = datasetBeanMapper.variablesToMap(inData);
		//넥사에서보낸 argument 맵으로 받기.
		
		List<WhBean>findWhList =logBaseServiceFacade.findWhList(argsMap);
		//조회된 목록들 list에 담기
		
		datasetBeanMapper.beansToDataset(outData, findWhList, WhBean.class);
		
	}
	@RequestMapping("/log/base/batchWhProcess")
	public void batchWhProcess(HttpServletRequest request, HttpServletResponse response)throws Exception{
		
		
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		
	    List<WhBean>batchWhList=datasetBeanMapper.datasetToBeans(inData, WhBean.class); 
	    //넥사에서 보낸  데이터셋을 빈즈화 시켜서 리스트에  담기.. 조회를 제외한 추가,저장,삭제,업데이트는 이런식으로.
	    
	    logBaseServiceFacade.batchWhProcess(batchWhList);
	    
	    
	    
	}
}
