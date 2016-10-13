package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.AntimicrobialBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.CutnRltnExmntBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatCutnHistBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;
import com.seoulit.erp47.med.base.to.VirusBean;

public interface CautionApplicationSerevice {

		List<OrdBean>findOrdList(Map<String,String>argsMap);
		List<VirusBean>findVirusList(Map<String,String>argsMap);
		List<CutnArticleBean>findCutnArticle(Map<String,String>argsMap);

		//----------------------------------------------------------------------------
		//----------------------------------------------------------------------------
		//----------------------------------------------------------------------------
		
	    void batchCutnArticleProcess(List<CutnArticleBean> cutnArticleList);		  
	    List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap);	   
	    void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList);  
	    List<PatCutnBean> findPatCutnList(Map<String, String> argsMap);				
	    List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap);             
	    void batchPatCutnProcess(Map<String, Object> patCautionMap);  
	    List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap);
		List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap);
}
