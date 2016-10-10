package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.CutnArticleBean;

public interface CutnArticleDAO {

	
	List<CutnArticleBean>findCutnArticle(Map<String, String>argsMap);
	void insertCutnArticle(CutnArticleBean cutnArticleBean);
	void updateCutnArticle(CutnArticleBean cutnArticleBean);
	void deleteCutnArticle(CutnArticleBean cutnArticleBean);
}
