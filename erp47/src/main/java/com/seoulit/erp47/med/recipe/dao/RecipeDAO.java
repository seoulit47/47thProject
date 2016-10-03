package com.seoulit.erp47.med.recipe.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.seoulit.erp47.med.recipe.to.SurgCdBean;

@Repository
public interface RecipeDAO {
		List<SurgCdBean>findSurgList(Map<String,String>argsMap);
}
