package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

public interface CautionApplicationSerevice {

		List<OrdBean>findOrdList(Map<String,String>argsMap);
		List<SpeciesVirusBean>findVirusList(Map<String,String>argsMap);
		List<CutnArticleBean>findCutnArticle(Map<String,String>argsMap);
}
