package com.seoulit.erp47.med.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.applicationService.EmrApplicationService;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

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
    private TrmtSchdApplicationService trmtSchdApplicationService;
    @Autowired
    private CautionApplicationService cautionApplicationService;*/


    @Override
    public List<PrscBean> findPrscList(Map<String, String> argsMap) {
        return emrApplicationService.findPrscList(argsMap);
    }

    @Override
    public List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap) {
        return emrApplicationService.findPrscDtlList(argsMap);
    }

}
