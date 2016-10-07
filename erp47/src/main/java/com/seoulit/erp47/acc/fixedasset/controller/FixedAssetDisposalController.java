package com.seoulit.erp47.acc.fixedasset.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.acc.fixedasset.service.FixedAssetServiceFacade;
import com.seoulit.erp47.acc.fixedasset.to.DisposalPlnFixedAssetBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalRegBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalSellValueBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetSequenceBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoulit.erp47.acc.fixedasset.controller
 * @Class    FixedAssetDisposalController.java
 * @Create   2016. 10. 07.
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class FixedAssetDisposalController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	
	@Autowired
	FixedAssetServiceFacade fixedAssetServiceFacade;
	
	@RequestMapping("acc/fixedasset/findDisposalPlnFixedAssetNo.do")
	public void findDisposalPlnFixedAssetNo(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<FixedAssetSequenceBean> fixedAssetSequenceBeanList = fixedAssetServiceFacade.findDisposalPlnFixedAssetNo();
		dataSetBeanMapper.beansToDataset(outData, fixedAssetSequenceBeanList, FixedAssetSequenceBean.class);
	}
	
	@RequestMapping("acc/fixedasset/findDisposalPlnFixedAssetList.do")
	public void findDisposalPlnFixedAssetList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
	    Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<DisposalPlnFixedAssetBean> disposalPlnFixedAssetBeanList = fixedAssetServiceFacade.findDisposalPlnFixedAssetList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, disposalPlnFixedAssetBeanList, DisposalPlnFixedAssetBean.class);
	}

	@RequestMapping("acc/fixedasset/batchDisposalPlnFixedAssetProcess.do")
	public void batchDisposalPlnFixedAssetProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<DisposalPlnFixedAssetBean> disposalPlnFixedAssetBeanList = dataSetBeanMapper.datasetToBeans(inData, DisposalPlnFixedAssetBean.class);
		fixedAssetServiceFacade.batchDisposalPlnFixedAssetProcess(disposalPlnFixedAssetBeanList);
		dataSetBeanMapper.beanToDataset(outData, new DisposalPlnFixedAssetBean(), DisposalPlnFixedAssetBean.class);
	}
	
	@RequestMapping("acc/fixedasset/findDisposalFixedAssetList.do")
	public void findDisposalFixedAssetList(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    PlatformData inData = (PlatformData)request.getAttribute("inData");
	    PlatformData outData = (PlatformData)request.getAttribute("outData");
	    Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<DisposalRegBean> disposalRegBeanList = fixedAssetServiceFacade.findDisposalFixedAssetList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, disposalRegBeanList, DisposalRegBean.class);
	}
	
	@RequestMapping("acc/fixedasset/findDisposalSellValue.do")
	public void findDisposalSellValue(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		DisposalSellValueBean inDisposalSellValueBean = dataSetBeanMapper.datasetToBean(inData, DisposalSellValueBean.class);
		DisposalSellValueBean outDisposalSellValueBean = fixedAssetServiceFacade.findDisposalSellValue(inDisposalSellValueBean);
		dataSetBeanMapper.beanToDataset(outData, outDisposalSellValueBean, DisposalSellValueBean.class);
	}
	
	@RequestMapping("acc/fixedasset/batchDisposalFixedAssetProcess.do")
	public void batchDisposalFixedAssetProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData)request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<DisposalRegBean> disposalRegBeanList = dataSetBeanMapper.datasetToBeans(inData, DisposalRegBean.class);
		fixedAssetServiceFacade.batchDisposalFixedAssetProcess(disposalRegBeanList);
		dataSetBeanMapper.beanToDataset(outData, new DisposalRegBean(), DisposalRegBean.class);
	}
}