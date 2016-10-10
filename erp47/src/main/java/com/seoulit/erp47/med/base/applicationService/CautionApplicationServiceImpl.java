package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.CutnArticleDAO;
import com.seoulit.erp47.med.base.dao.OrdDAO;
import com.seoulit.erp47.med.base.dao.PatCutnDAO;
import com.seoulit.erp47.med.base.dao.VirusDAO;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

@Component
public class CautionApplicationServiceImpl implements CautionApplicationSerevice{

	@Autowired
	OrdDAO ordDAO;
	@Autowired
	VirusDAO virusDAO;
	@Autowired
	CutnArticleDAO cutnArticleDAO;
	@Autowired
	PatCutnDAO patCutnDAO;
	
	@Override
	public List<OrdBean> findOrdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return ordDAO.findOrdList(argsMap);
	}


	@Override
	public List<SpeciesVirusBean> findVirusList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return virusDAO.findVirusList(argsMap);
	}


	@Override
	public List<CutnArticleBean> findCutnArticle(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return cutnArticleDAO.findCutnArticle(argsMap);
	}


	@Override
	public void batchCutnArticleProcess(List<CutnArticleBean> articleList) {
		// TODO Auto-generated method stub
		
		for(CutnArticleBean cutnArticleBean : articleList){
			
			System.out.println("::::"+cutnArticleBean.getStatus());
			
					switch(cutnArticleBean.getStatus()){
					
					
					case "inserted" :
						
						cutnArticleDAO.insertCutnArticle(cutnArticleBean);
						break;
						
					case "updated" :
						cutnArticleDAO.updateCutnArticle(cutnArticleBean);
						break;
						
					case "deleted" :
						cutnArticleDAO.deleteCutnArticle(cutnArticleBean);
						break;
					}
			
		} 
		
		
	}


	@Override
	public List<PatCutnBean> findPatCutnList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return patCutnDAO.findPatCutnList(argsMap);
	}




}
