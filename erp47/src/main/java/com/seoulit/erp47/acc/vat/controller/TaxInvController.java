package com.seoulit.erp47.acc.vat.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.acc.vat.service.VATServiceFacade;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.sup.vat.to.DetailTaxInvBean;
import com.seoulit.erp47.sup.vat.to.TaxInvBean;


/**
 * @Package  com.seoulit.erp47.acc.vat.controller
 * @Class    TaxInvController.java
 * @Create   2016. 09. 05.
 * @Author   YonG
 * @Description 
 *  	
 * @LastUpdated 
 */

@Controller
public class TaxInvController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	VATServiceFacade vatServiceFacade;

	@RequestMapping("acc/vat/findTaxInvList.do")
	public void findTaxInvList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<TaxInvBean> taxInvList = vatServiceFacade.findTaxInvList(argsMap);

		List<DetailTaxInvBean> detailTaxInvList = new ArrayList<DetailTaxInvBean>();
		for (TaxInvBean bean : taxInvList) {
			List<DetailTaxInvBean> temDetailTaxInvList = bean.getDetailTaxInvList();
			detailTaxInvList.addAll(temDetailTaxInvList);
		}
		dataSetBeanMapper.beansToDataset(outData, taxInvList, TaxInvBean.class);
		dataSetBeanMapper.beansToDataset(outData, detailTaxInvList, DetailTaxInvBean.class);
	}

	@RequestMapping("acc/vat/batchAtTaxInvProcess.do")
	public void batchTaxInvProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<TaxInvBean> TaxInvList = dataSetBeanMapper.datasetToBeans(inData, TaxInvBean.class);
		List<DetailTaxInvBean> detailTaxInvList = dataSetBeanMapper.datasetToBeans(inData, DetailTaxInvBean.class);

		List<TaxInvBean> tempTaxInvList = new ArrayList<TaxInvBean>();
		for (TaxInvBean tempTaxInvBean : TaxInvList) {

			List<DetailTaxInvBean> tempDetailTaxInvList = new ArrayList<DetailTaxInvBean>();
			for (DetailTaxInvBean detailTaxInvBean : detailTaxInvList) {

				if (tempTaxInvBean.getPubNo().equals(detailTaxInvBean.getPubNo())) {
					tempDetailTaxInvList.add(detailTaxInvBean);
				}
			}
			if (tempDetailTaxInvList.size() != 0) {
				tempTaxInvBean.setDetailTaxInvList(tempDetailTaxInvList);
			}
			tempTaxInvList.add(tempTaxInvBean);
		}
		vatServiceFacade.batchTaxInvProcess(tempTaxInvList);
	}

}
