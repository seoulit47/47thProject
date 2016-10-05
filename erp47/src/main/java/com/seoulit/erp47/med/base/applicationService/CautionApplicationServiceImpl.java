package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.CutnArticleDAO;
import com.seoulit.erp47.med.base.dao.OrdDAO;
import com.seoulit.erp47.med.base.dao.VirusDAO;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

@Component
public class CautionApplicationServiceImpl implements CautionApplicationSerevice{

	@Autowired
	OrdDAO ordDAO;
	@Autowired
	VirusDAO virusDAO;
	@Autowired
	CutnArticleDAO cutnArticleDAO;
	
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

}
