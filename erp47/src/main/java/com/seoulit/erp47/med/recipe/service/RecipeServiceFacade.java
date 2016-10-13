package com.seoulit.erp47.med.recipe.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.common.to.SearchConditionBean;
import com.seoulit.erp47.med.recipe.to.SurgBookBean;
import com.seoulit.erp47.med.recipe.to.SurgCdBean;

public interface RecipeServiceFacade {

	
		List<SurgCdBean>findSurgCdList(Map<String,String>argsMap);
		List<SurgBookBean> findMpSurgBookList(HashMap<String,List<SearchConditionBean>> searchConditionMap);
		void batchMpSurgBookProcess(List<SurgBookBean> mpSurgBookList);
		
}
