package com.seoulit.erp47.med.recipe.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.recipe.dao.RecipeDAO;
import com.seoulit.erp47.med.recipe.to.SurgCdBean;

@Component
public class RecipeApplicationServiceImpl implements RecipeApplicationService{
	
	@Autowired
	RecipeDAO recipeDAO;
	
	@Override
	public List<SurgCdBean> findSurgCdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return recipeDAO.findSurgList(argsMap);
	
	}

}
