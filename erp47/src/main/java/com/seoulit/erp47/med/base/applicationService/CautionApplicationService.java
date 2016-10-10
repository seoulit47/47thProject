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

public interface CautionApplicationService {
    List<CutnArticleBean> findCutnArticleList(Map<String, String> argsMap);		//주의사항 항목 조회
    void batchCutnArticleProcess(List<CutnArticleBean> cutnArticleList);		//주의사항 항목 BATCH  
    List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap);	//주의사항 관련검사 조회   
    void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList);  // 주의사항 관련검사 BATCH
    List<PatCutnBean> findPatCutnList(Map<String, String> argsMap);				//환자 주의사항 조회
    List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap);		//환자 주의사항 수정내역 조회             
    void batchPatCutnProcess(Map<String, Object> patCautionMap);                // 환자 주의사항, 수정내역 BATCH  
    List<OrdBean> findOrdList(Map<String, String> argsMap);
    List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap);
    List<VirusBean> findVirusList(Map<String, String> argsMap);
    List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap);
}
