package com.seoulit.erp47.acc.closing.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.acc.closing.service.ClosingServiceFacade;
import com.seoulit.erp47.acc.closing.to.FinanStatsBean;
import com.seoulit.erp47.acc.closing.to.TotalBalBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Controller
public class FinanStatsController {
    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    @Autowired
    ClosingServiceFacade closingServiceFacade;

    @RequestMapping("acc/closing/findFinanStats.do")
    public void findFinanStats(HttpServletRequest request,HttpServletResponse response) 
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        Map<String, Object> argsMap = dataSetBeanMapper.procedureVariablesToMap(inData);
        List<FinanStatsBean> finanStatList = closingServiceFacade.findFinanStats(argsMap);
        dataSetBeanMapper.beansToDataset(outData, finanStatList, FinanStatsBean.class);
    }
    
   @RequestMapping("acc/closing/findTotalBalStat.do")
    public void findTotalBalStat(HttpServletRequest request,HttpServletResponse response) 
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData)request.getAttribute("inData");
        Map<String, Object> argsMap = dataSetBeanMapper.procedureVariablesToMap(inData);
        List<TotalBalBean> totalBalList = closingServiceFacade.findTotalBalList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, totalBalList, TotalBalBean.class);

    }
    
    @SuppressWarnings("unchecked")
	@RequestMapping("acc/closing/printFinanStats.do")
	public ModelAndView printFinanStats(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
    	
		String accPrid=request.getParameter("accPrid");
		String finanStatsCd=request.getParameter("finanStatsCd");

		ModelAndView mv=new ModelAndView();
		HashMap<String, Object> queryMap = new HashMap<String, Object>();
	
		System.out.println(accPrid + "    :    "+finanStatsCd);
		queryMap.put("accPrid", accPrid);
		queryMap.put("finanStatsCd", finanStatsCd);
		
		HashMap<String, Object> printFinanMap = closingServiceFacade.findPrintFinanStats(queryMap);
		List<FinanStatsBean> finanStatList =
				(List<FinanStatsBean>) printFinanMap.get("finanStatsList");
		AccPridBean accPridBean = (AccPridBean) printFinanMap.get("accPrid");
		
		if(finanStatsCd.equals("A")){
			accPridBean.setFinanStatsNm("재  무  상  태  표");

		}else if(finanStatsCd.equals("B")){
			accPridBean.setFinanStatsNm("손  익  계  산  서");
		}
		List<AccPridBean> accPridList= new ArrayList<AccPridBean>();
		accPridList.add(accPridBean);

		JRBeanCollectionDataSource dataSource=new JRBeanCollectionDataSource(finanStatList);
		JRBeanCollectionDataSource subData=new JRBeanCollectionDataSource(accPridList);
		
		mv.setViewName("finanStats-view");
		mv.addObject("format", "pdf");
		mv.addObject("dataSource", dataSource);
		mv.addObject("subData", subData);

		return mv;	//여기서에러남
	}
}
