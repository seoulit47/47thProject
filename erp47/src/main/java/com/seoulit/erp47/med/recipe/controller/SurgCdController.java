package com.seoulit.erp47.med.recipe.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoulit.erp47.common.util.DataSetBeanMapper;
import com.seoulit.erp47.med.recipe.service.RecipeServiceFacade;
import com.seoulit.erp47.med.recipe.to.SurgCdBean;

@Controller
public class SurgCdController {
		@Autowired
		DataSetBeanMapper datasetBeanMapper;
		@Autowired
		RecipeServiceFacade recipeServiceFacade;
		
		@RequestMapping("med/recipe/findMpSurgCdList.do")
		public void findSurgCdList(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
				System.out.println("med findSurgCdList 매서드입니다");
			
				PlatformData inData =(PlatformData) request.getAttribute("inData");
				PlatformData outData =(PlatformData) request.getAttribute("outData");
			
			
				Map<String,String>argsMap=datasetBeanMapper.variablesToMap(inData);
				//키 값  rage :	분류	surgName : 수술명 
		
				List<SurgCdBean>surgList=recipeServiceFacade.findSurgCdList(argsMap);
				
				
				datasetBeanMapper.beansToDataset(outData, surgList, SurgCdBean.class);
				
		}
}
