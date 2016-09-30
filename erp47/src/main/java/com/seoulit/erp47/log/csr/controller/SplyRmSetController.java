package com.seoulit.erp47.log.csr.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.csr.service.SplyLndryRmServiceFacade;
import com.seoulit.erp47.log.csr.to.SplyRmSetCpntBean;
import com.seoulit.erp47.log.csr.to.SplyRmSetCpntHistBean;

/**
 * @Package com.seoulit.erp47.log.csr.controller
 * @Class SplyRmSETController.java
 * @Create
 * @Author 김성호
 * @Description 공급실 SET구성품관리
 *
 * @LastUpdated
 */

@Controller
public class SplyRmSetController {

	@Autowired
	private SplyLndryRmServiceFacade splyLndryRmServiceFacade;
	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;

	// 공급실 SET 구성품 관리 조회
	@RequestMapping("log/csr/findSplyRmSetCpntList.do")
	@SuppressWarnings("unchecked")
	public void findSplyRmSetCpntList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<SplyRmSetCpntBean> splyRmSetCpntBeanList = splyLndryRmServiceFacade.findSplyRmSetCpntList(argsMap);

		dataSetBeanMapper.beansToDataset(outData, splyRmSetCpntBeanList, SplyRmSetCpntBean.class);

		List<SplyRmSetCpntHistBean> splyRmSetCpntHistList = new ArrayList<SplyRmSetCpntHistBean>();
		for (SplyRmSetCpntBean splyRmSetCpntBean : splyRmSetCpntBeanList) {
			List<SplyRmSetCpntHistBean> splyRmSetCpntHist = splyRmSetCpntBean.getSplyRmSetCpntHistList();
			splyRmSetCpntHistList.addAll(splyRmSetCpntHist);
		}
		dataSetBeanMapper.beansToDataset(outData, splyRmSetCpntHistList, SplyRmSetCpntHistBean.class);
	}

	// SET코드 세팅

	@RequestMapping("log/csr/callSetCdSeq.do")
	public void callSetCdSeq(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData outData;
		outData = (PlatformData) request.getAttribute("outData");

		String SetCdNo = splyLndryRmServiceFacade.callSetCdSeq();
		VariableList variableList = outData.getVariableList();
		variableList.add("SetCdNo", SetCdNo);

	}

	// SET 구성품 일괄처리
	@RequestMapping("log/csr/batchProcessSetCpntList.do")
	public void batchProcessSetCpntList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<SplyRmSetCpntBean> splyRmSetCpnList = dataSetBeanMapper.datasetToBeans(inData, SplyRmSetCpntBean.class);

		List<SplyRmSetCpntHistBean> splyRmSetCpntHistList = dataSetBeanMapper.datasetToBeans(inData,
				SplyRmSetCpntHistBean.class);

		if (splyRmSetCpnList.size() != 0) {
			for (SplyRmSetCpntBean splyRmSetCpntBean : splyRmSetCpnList) {
				List<SplyRmSetCpntHistBean> tempSplyRmSetCpntHistList = new ArrayList<SplyRmSetCpntHistBean>();

				if (splyRmSetCpntHistList.size() != 0) {
					for (int i = 0; i < splyRmSetCpntHistList.size(); i++) {
						if (splyRmSetCpntBean.getSetCd().equals(splyRmSetCpntHistList.get(i).getSetCd())) {
							tempSplyRmSetCpntHistList.add(splyRmSetCpntHistList.get(i));
							splyRmSetCpntHistList.remove(splyRmSetCpntHistList.get(i));
						}
					}
				}
				splyRmSetCpntBean.setSplyRmSetCpntHistList(tempSplyRmSetCpntHistList);
			}
		}
		splyLndryRmServiceFacade.batchProcessSetCpntList(splyRmSetCpnList, splyRmSetCpntHistList);

	}

}
