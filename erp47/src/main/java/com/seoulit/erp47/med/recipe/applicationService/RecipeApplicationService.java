package com.seoulit.erp47.med.recipe.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.recipe.to.SurgCdBean;

public interface RecipeApplicationService {

	List<SurgCdBean>findSurgCdList(Map<String,String>argsMap);
	
	
}
