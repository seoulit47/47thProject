package com.seoulit.erp47.log.demd.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.log.demd.service.DemdServiceFacade;
import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;

/**
 * @Package com.seoul.his.log.demd.controller
 * @Class GdsAnspController.java
 * @Create
 * @Author 김성호
 * @Description 물품청구 컨트롤러 & 물품청구상세 컨트롤러
 *
 * @LastUpdated
 */

@Controller
public class GdsAnspController {

	@Autowired
	DemdServiceFacade demdServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	// 조회
	@RequestMapping("log/demd/findGdsAnspList.do")
	public void findGdsAnspList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<GdsAnspBean> gdsAnspList = demdServiceFacade.findGdsAnspList(argsMap);
		
		dataSetBeanMapper.beansToDataset(outData, gdsAnspList, GdsAnspBean.class);
		/*	
	    List<GdsAnspHistBean> gdsAnspHistList = new ArrayList<>();
		for (GdsAnspBean gsAnspBean : gdsAnspList) {
			List<GdsAnspHistBean> gdsAnspHist = gsAnspBean.getGdsAnspHistList();
			gdsAnspHistList.addAll(gdsAnspHist);
		}

		dataSetBeanMapper.beansToDataset(outData, gdsAnspHistList, GdsAnspHistBean.class);
		*/

	}

	// 청구 상세 조회
	@RequestMapping("log/demd/findGdsAnspHistList.do")
	public void findGdsAnspHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<GdsAnspHistBean> gdsAnspHistList = demdServiceFacade.findGdsAnspHistList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, gdsAnspHistList, GdsAnspHistBean.class);
	}

	// 안씀
	@RequestMapping("log/demd/batchGdsAnspProcess.do")
	public void batchGdsAnspProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<GdsAnspBean> GdsAnspBeanList = dataSetBeanMapper.datasetToBeans(inData, GdsAnspBean.class);
		demdServiceFacade.batchGdsAnspProcess(GdsAnspBeanList);
	}

	// 일괄처리
	@RequestMapping("log/demd/batchGdsAnspHistProcess.do")
	public void batchGdsAnspHistProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		System.out.println("??????????come here ?");
		
		List<GdsAnspBean> GdsAnspBeanList = dataSetBeanMapper.datasetToBeans(inData, GdsAnspBean.class);
		List<GdsAnspHistBean> GdsAnspHistBeanList = dataSetBeanMapper.datasetToBeans(inData, GdsAnspHistBean.class);
		
		System.out.println("come here ?");
		if (GdsAnspBeanList.size() != 0) {
			System.out.println("come here ? 111111111111111");
			for (GdsAnspBean anspBean : GdsAnspBeanList) {
				List<GdsAnspHistBean> tempGdsAnspHistList = new ArrayList<GdsAnspHistBean>();
				if (GdsAnspHistBeanList.size() != 0) {
					System.out.println("come here ? 22222222222222");
					for (int i = 0; i < GdsAnspHistBeanList.size(); i++) {
						if (anspBean.getGdsAnspNo().equals(GdsAnspHistBeanList.get(i))) {
							tempGdsAnspHistList.add(GdsAnspHistBeanList.get(i));
							tempGdsAnspHistList.remove(GdsAnspHistBeanList.get(i));
						}
					}
				}
				anspBean.setGdsAnspHistList(tempGdsAnspHistList);
			}
		}
		
		System.out.println("the End ???");
		demdServiceFacade.batchGdsAnspHistProcess(GdsAnspBeanList, GdsAnspHistBeanList);
	}
}
