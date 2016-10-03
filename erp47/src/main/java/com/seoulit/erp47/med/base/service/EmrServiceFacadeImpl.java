package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.applicationService.CautionApplicationSerevice;
import com.seoulit.erp47.med.base.applicationService.EmrApplicationService;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.OrdBean;
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

}
