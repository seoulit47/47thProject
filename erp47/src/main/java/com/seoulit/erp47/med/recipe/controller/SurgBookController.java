package com.seoulit.erp47.med.recipe.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.to.SearchConditionBean;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.recipe.service.RecipeServiceFacade;
import com.seoulit.erp47.med.recipe.to.SurgBookBean;

@Controller
public class SurgBookController {

	@Autowired
	RecipeServiceFacade recipeServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
		
	
		@RequestMapping("med/recipe/findMpSurgBookList.do")
		public void findMpSurgBookList(HttpServletRequest request, HttpServletResponse response)throws Exception{
		//수술 예약 리스트 가져오기
					
				PlatformData inData = (PlatformData)request.getAttribute("inData"); 
				PlatformData outData = (PlatformData)request.getAttribute("outData"); 
				
				System.out.println("med / findMpSurgBookList  매서드입니다 .");
				
				
				HashMap<String, List<SearchConditionBean>> searchConditionMap = new HashMap<>();
				List<SearchConditionBean> searchConditionBeanList = dataSetBeanMapper.datasetToBeans(inData,SearchConditionBean.class);
				searchConditionMap.put("searchConditionBeanList", searchConditionBeanList);

				
				List<SurgBookBean> mpSurgBookBeanList =recipeServiceFacade.findMpSurgBookList(searchConditionMap);
		
				dataSetBeanMapper.beansToDataset(outData, mpSurgBookBeanList, SurgBookBean.class);	
		
		}
		
		@RequestMapping("med/recipe/batchMpSurgBookProcess.do")
		public void batchMpSurgBookProcess(HttpServletRequest request, HttpServletResponse response)throws Exception{
			//수술 예약  일괄처리
				PlatformData inData = (PlatformData)request.getAttribute("inData"); 
				PlatformData outData = (PlatformData)request.getAttribute("outData"); 
				
				List<SurgBookBean> MpSurgBookBeanList = dataSetBeanMapper.datasetToBeans(inData, SurgBookBean.class);

				recipeServiceFacade.batchMpSurgBookProcess(MpSurgBookBeanList);
		}
}
