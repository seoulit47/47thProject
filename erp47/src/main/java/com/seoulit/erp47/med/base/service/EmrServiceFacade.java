package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

public interface EmrServiceFacade {
   
    List<PrscBean> findPrscList(Map<String, String> argsMap);

    List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap);
    
    List<OrdBean>findOrdList(Map<String,String>argsMap);

    List<SpeciesVirusBean>findVirusList(Map<String,String>argsMap);
    
    List<DiseaseBean>findDiseaseList(Map<String,String>argsMap);
    
    List<DiseaseBean>findDiseaseCdList();
    
    List<PatientDsBean>findPatientDsPrscList(Map<String,String>args);
    
    List<BaseExamBean>findBaseExamList(Map<String,String>argsMap);
    
    public void batchEmrProcess(Map<String,Object>emrMap);
    
    List<CutnArticleBean>findCutnArticle(Map<String,String>argsMap);
}
