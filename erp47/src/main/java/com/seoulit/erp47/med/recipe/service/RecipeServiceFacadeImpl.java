package com.seoulit.erp47.med.recipe.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.common.to.SearchConditionBean;
import com.seoulit.erp47.med.recipe.applicationService.RecipeApplicationService;
import com.seoulit.erp47.med.recipe.to.SurgBookBean;
import com.seoulit.erp47.med.recipe.to.SurgCdBean;

@Service
public class RecipeServiceFacadeImpl implements RecipeServiceFacade{

	@Autowired
	RecipeApplicationService recipeApplicationService;
	
	@Override
	public List<SurgCdBean> findSurgCdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return recipeApplicationService.findSurgCdList(argsMap);
	}

	@Override
	public List<SurgBookBean> findMpSurgBookList(HashMap<String, List<SearchConditionBean>> searchConditionMap) {
		// TODO Auto-generated method stub
		return recipeApplicationService.findMpSurgBookList(searchConditionMap);
	}

	@Override
	public void batchMpSurgBookProcess(List<SurgBookBean> mpSurgBookList) {
		// TODO Auto-generated method stub
		recipeApplicationService.batchMpSurgBookProcess(mpSurgBookList);
	}

	
	
}
