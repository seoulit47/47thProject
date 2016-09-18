package com.seoulit.erp47.com.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.com.base.service.ComBaseServiceFacade;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

@Controller
public class CodeController {

	
	   @Autowired
	    private ComBaseServiceFacade comBaseServiceFacade;

	    @Autowired
	    private DataSetBeanMapper datasetBeanMapper;
	    
	    
	    @RequestMapping("com/findCodeList.do")
	    public void findCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception {

	    
	    	PlatformData inData = (PlatformData)request.getAttribute("inData");
	    	PlatformData outData =(PlatformData)request.getAttribute("outData");
	    	
	    	
	    	Map<String,String>argsMap = datasetBeanMapper.variablesToMap(inData);
	    	
	    	
	    	
	    	//DatasetBeanMapper에 보면 inData를  Map으로 받을 수 있도록 variablesToMap 매서드가 있다.
	    	//받을 argument가 여러개라면 각각 inData로 받아서 map 에 넣지말고
	    	//요걸 써가지구 한방에 가져오고 map 에다가 넣자.!!!!
	    	 
	    	List<CodeBean>codeList = comBaseServiceFacade.findCodeList(argsMap);
	    	System.out.println(codeList.size());
	    	datasetBeanMapper.beansToDataset(outData, codeList, CodeBean.class);
    	
	    }
	    
	    @RequestMapping("com/findCode.do")
	    public void findCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    	
	    	System.out.println("findCode.do");
	    	
	    	PlatformData inData = (PlatformData)request.getAttribute("inData"); 
	    	PlatformData outData =(PlatformData)request.getAttribute("outData");
	    
	    	Map<String,String>argsMap = datasetBeanMapper.variablesToMap(inData);
	    
	    	
	    	List<CodeNmBean>codeList=comBaseServiceFacade.findCode(argsMap);
	    	
	    	
	    	datasetBeanMapper.beansToDataset(outData, codeList, CodeNmBean.class);
	    }
	    
	    
	@RequestMapping("com/batchCode.do")    
    public void batchCode(HttpServletRequest request, HttpServletResponse response)throws Exception{
	    	
	    	
	    	PlatformData inData = (PlatformData)request.getAttribute("inData");
    
	    	List<CodeBean>batchCodeList = datasetBeanMapper.datasetToBeans(inData, CodeBean.class);
	    	//넥사에서 받은 inData , 즉 데이터셋을 datasetBeanMapper로 빈즈화 시킨다.. dsCode를  CodeBean과 매핑..
	    	//즉 batchCodeList에는 넥사코드폼의 codeGrid의 값들이 그대로 맵핑되서 전달된다.
	    	
	    	comBaseServiceFacade.batchCode(batchCodeList);
	    }
	
	@RequestMapping("com/findCodePopupList.do")
	 public void findCodePopupList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
			System.out.println("코드팝업매서드 입니다.");
		
			PlatformData inData = (PlatformData)request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
			
			Map<String,String>argsMap = datasetBeanMapper.variablesToMap(inData);
			
			List<CodeNmBean>findCodePopupList=comBaseServiceFacade.findCodePopupList(argsMap);
			
			datasetBeanMapper.beansToDataset(outData, findCodePopupList, CodeNmBean.class);
	}
}
