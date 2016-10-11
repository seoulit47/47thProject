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

public interface CautionApplicationSerevice {

		List<OrdBean>findOrdList(Map<String,String>argsMap);
		List<SpeciesVirusBean>findVirusList(Map<String,String>argsMap);
		List<CutnArticleBean>findCutnArticle(Map<String,String>argsMap);


		
		
		//----------------------------------------------------------------------------
		//----------------------------------------------------------------------------
		//----------------------------------------------------------------------------
		
	    List<CutnArticleBean> findCutnArticleList(Map<String, String> argsMap);		//���ǻ��� �׸� ��ȸ
	    void batchCutnArticleProcess(List<CutnArticleBean> cutnArticleList);		//���ǻ��� �׸� BATCH  
	    List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap);	//���ǻ��� ���ð˻� ��ȸ   
	    void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList);  // ���ǻ��� ���ð˻� BATCH
	    List<PatCutnBean> findPatCutnList(Map<String, String> argsMap);				//ȯ�� ���ǻ��� ��ȸ
	    List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap);		//ȯ�� ���ǻ��� �������� ��ȸ             
	    void batchPatCutnProcess(Map<String, Object> patCautionMap);                // ȯ�� ���ǻ���, �������� BATCH  
	    List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap);
	    List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap);
}
