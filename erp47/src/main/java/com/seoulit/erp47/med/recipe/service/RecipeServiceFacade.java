package com.seoulit.erp47.med.recipe.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.recipe.to.SurgCdBean;

public interface RecipeServiceFacade {

	
		List<SurgCdBean>findSurgCdList(Map<String,String>argsMap);
}
