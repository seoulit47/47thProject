package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.applicationService.CautionApplicationSerevice;
import com.seoulit.erp47.med.base.applicationService.EmrApplicationService;
import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.CutnArticleBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.OrdBean;
import com.seoulit.erp47.med.base.to.PatCutnBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;
import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

/**
 * @Package  com.seoul.his.med.base.service
 * @Class    EmrServiceFacadeImpl.java
 * @Create   
 * @Author   
 * @Description 진료처방 공통 EMR 서비스퍼사드
 *
 * @LastUpdated
 */

@Service
public class EmrServiceFacadeImpl implements EmrServiceFacade {

    @Autowired
    private EmrApplicationService emrApplicationService;
    /*@Autowired
    private TrmtSchdTypeApplicationService trmtSchdTypeApplicationService;
    @Autowired
    private TrmtSchdApplicationService trmtSchdApplicationService;*/
    @Autowired
    private CautionApplicationSerevice cautionApplicationService;


    @Override
    public List<PrscBean> findPrscList(Map<String, String> argsMap) {
        return emrApplicationService.findPrscList(argsMap);
    }

    @Override
    public List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap) {
        return emrApplicationService.findPrscDtlList(argsMap);
    }

	@Override
	public List<OrdBean> findOrdList(Map<String, String> argsMap) {
		
		return cautionApplicationService.findOrdList(argsMap);
	}

	@Override
	public List<SpeciesVirusBean> findVirusList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return cautionApplicationService.findVirusList(argsMap);
	}

	@Override
	public List<DiseaseBean> findDiseaseList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findDiseaseList(argsMap);
	}

	@Override
	public List<DiseaseBean> findDiseaseCdList() {
		// TODO Auto-generated method stub
		return emrApplicationService.findDiseaseCdList();
	}

	@Override
	public List<PatientDsBean> findPatientDsPrscList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findPatientDsPrscList(argsMap);
	}

	@Override
	public List<BaseExamBean> findBaseExamList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return emrApplicationService.findBaseExamList(argsMap);
	}

	@Override
	public void batchEmrProcess(Map<String, Object> emrMap) {
		// TODO Auto-generated method stub
		emrApplicationService.batchEmrProcess(emrMap);
	}

	@Override
	public List<CutnArticleBean> findCutnArticle(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return cautionApplicationService.findCutnArticle(argsMap);
	}

	@Override
	public void batchCutnArticleProcess(List<CutnArticleBean> articleList) {
		// TODO Auto-generated method stub
		cautionApplicationService.batchCutnArticleProcess(articleList);
		
	}

	@Override
	public List<PatCutnBean> findPatCutnList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		// 환자 주의사항 조회
		return cautionApplicationService.findPatCutnList(argsMap);
	}

	

}
