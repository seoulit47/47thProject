package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.AntimicrobialDAO;
import com.seoulit.erp47.med.base.dao.CutnArticleDAO;
import com.seoulit.erp47.med.base.dao.CutnRltnExmntDAO;
import com.seoulit.erp47.med.base.dao.OrdDAO;
import com.seoulit.erp47.med.base.dao.PatCutnDAO;
import com.seoulit.erp47.med.base.dao.PatCutnHistDAO;
import com.seoulit.erp47.med.base.dao.SpeciesVirusDAO;
import com.seoulit.erp47.med.base.dao.VirusDAO;
import com.seoulit.erp47.med.base.to.AntimicrobialBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.CutnRltnExmntBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatCutnHistBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;
import com.seoulit.erp47.med.base.to.VirusBean;

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
	
    @Autowired
    private CutnRltnExmntDAO cutnRltnExmntDAO;
    @Autowired
    private PatCutnHistDAO patCutnHistDAO;
    @Autowired
    private AntimicrobialDAO antimicrobialDAO;
    
    @Autowired
    private SpeciesVirusDAO speciesVirusDAO;
	
	@Override
	public List<OrdBean> findOrdList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return ordDAO.findOrdList(argsMap);
	}


	@Override
	public List<VirusBean> findVirusList(Map<String, String> argsMap) {
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

//---------------------------------------------------------------------------
    @Override	//주의사항 관련검사 조회
    public List<CutnRltnExmntBean> findCutnRltnExmntList(Map<String, String> argsMap){
    	return cutnRltnExmntDAO.selectCutnRltnExmntList(argsMap);
    }
    @Override	//환자 주의사항 수정내역 조회
    public List<PatCutnHistBean> findPatCutnHistList(Map<String, String> argsMap){
    	return patCutnHistDAO.selectPatCutnHistList(argsMap);
    }
    @Override	    //주의사항 항목 BATCH         
    public void batchCutnRltnExmntProcess(List<CutnRltnExmntBean> cutnRltnExmntList){
    	for (CutnRltnExmntBean cutnRltnExmntBean : cutnRltnExmntList) {
            switch (cutnRltnExmntBean.getStatus()) {
            case "inserted":
            	cutnRltnExmntDAO.insertCutnRltnExmnt(cutnRltnExmntBean);
                break;
            case "deleted":
            	cutnRltnExmntDAO.deleteCutnRltnExmnt(cutnRltnExmntBean);
                break;
            }
        }
    }
    @SuppressWarnings("unchecked")
	@Override	   // 환자 주의사항, 수정내역 BATCH     수정요망, if든 뭐든 걸어서 해당여부 확인 후 그에 따라 인설트 딜리트
    public void batchPatCutnProcess(Map<String, Object> patCautionMap){
    	List<PatCutnBean> patCutnList = (List<PatCutnBean>) patCautionMap.get("patCutnList");
    	List<PatCutnHistBean> patCutnHistList = (List<PatCutnHistBean>) patCautionMap.get("patCutnHistList");
    	for (PatCutnBean patCutnBean : patCutnList) {
    		System.out.println(patCutnBean.getStatus());
            switch (patCutnBean.getStatus()) {
            case "inserted":
            	patCutnDAO.insertPatCutn(patCutnBean);
                break;
            case "deleted":
            	patCutnDAO.deletePatCutn(patCutnBean);
                break;
            }
        }
    	for (PatCutnHistBean patCutnHistBean : patCutnHistList) {
            switch (patCutnHistBean.getStatus()) {
            case "inserted":
            	patCutnHistDAO.insertPatCutnHist(patCutnHistBean);
                break;
            }
        }
    }
    
    @Override
    public List<AntimicrobialBean> findAntimicrobialList(Map<String, String> argsMap){
    	return antimicrobialDAO.selectAntimicrobialList(argsMap);
    }


	@Override
	public List<SpeciesVirusBean> findSpeciesVirusList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return speciesVirusDAO.selectSpeciesVirusList(argsMap);
	}

}
