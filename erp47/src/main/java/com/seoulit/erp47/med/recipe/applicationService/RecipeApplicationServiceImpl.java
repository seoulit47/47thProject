package com.seoulit.erp47.med.recipe.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.common.to.SearchConditionBean;
import com.seoulit.erp47.med.recipe.dao.RecipeDAO;
import com.seoulit.erp47.med.recipe.dao.SurgBookDAO;
import com.seoulit.erp47.med.recipe.to.SurgBookBean;
import com.seoulit.erp47.med.recipe.to.SurgCdBean;

@Component
public class RecipeApplicationServiceImpl implements RecipeApplicationService{
	
	@Autowired
	RecipeDAO recipeDAO;
	@Autowired
	SurgBookDAO surgBookDAO;
	
	@Override
	public List<SurgCdBean> findSurgCdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return recipeDAO.findSurgList(argsMap);
	
	}

	@Override
	public List<SurgBookBean> findMpSurgBookList(HashMap<String, List<SearchConditionBean>> searchConditionMap) {
		// TODO Auto-generated method stub
		return surgBookDAO.selectMpSurgBookList(searchConditionMap);
	}

	@Override
	public void batchMpSurgBookProcess(List<SurgBookBean> mpSurgBookList) {
		// TODO Auto-generated method stub
		
			for(SurgBookBean surgBookBean : mpSurgBookList){
				
						switch(surgBookBean.getStatus()){
						
						case "inserted" :
							surgBookDAO.insertMpSurgBook(surgBookBean);
							break;
						case "updated" :
							surgBookDAO.updateMpSurgBook(surgBookBean);
							break;
						
						
						}
				
			}
		
	}

}
