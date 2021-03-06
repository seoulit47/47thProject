package com.seoulit.erp47.sup.checkup.controller;

import java.util.HashMap;
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
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
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
	
	/*예약목록 조회*/
	@RequestMapping("sup/checkup/findRsvtList.do")
	public void findRsvtList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		 
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
	        
	    List<RsvtBean> rsvtList = supCheckupServiceFacade.findRsvtList(argsMap);
	    dataSetBeanMapper.beansToDataset(outData, rsvtList, RsvtBean.class);
	}
	
	/* 종합검진 예약관리 - 예약취소 */
    @RequestMapping("sup/checkup/cancelRsvt.do")
    public void cancelRsvt(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

        supCheckupServiceFacade.cancelRsvt(argsMap);
    }
    
    /* 종합검진 예약관리 - 저장*/
    @RequestMapping("sup/checkup/batchRsvtProcess.do")
    public void batchRsvtProcess(HttpServletRequest request, HttpServletResponse response) throws Exception{
    	 PlatformData inData = (PlatformData) request.getAttribute("inData");
         
    	 System.out.println(inData.saveXml());
         List<RsvtBean> rsvtList  = dataSetBeanMapper.datasetToBeans(inData, RsvtBean.class);
         List<ChoInspBean> choInspList = dataSetBeanMapper.datasetToBeans(inData, ChoInspBean.class);

         Map<String, Object> map = new HashMap<>();

         if(rsvtList.size() > 0){
             map.put("rsvtList", rsvtList);
         }
         
         if(choInspList.size() > 0){
             map.put("choInspList", choInspList);
         }
         
         supCheckupServiceFacade.batchRsvtProcess(map);
    }
    
    /* 종합검진 예약관리  - 예약번호생성*/
    @RequestMapping("sup/checkup/createNewRsvtNo.do")
    public void createNewRsvtNo(HttpServletRequest request, HttpServletResponse response) throws Exception{
    	PlatformData inData = (PlatformData)request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	
    	Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	String rsvtNo = supCheckupServiceFacade.createNewRsvtNo(argsMap);
    	dataSetBeanMapper.addVariable(outData, "rsvtNo", rsvtNo);
    }
    
}
