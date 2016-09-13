package com.seoulit.erp47.acc.elementary.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.applicationService.AccElementaryApplicationService;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;

@Service
public class AccElementaryServiceFacadeImpl implements AccElementaryServiceFacade{

    @Autowired
    AccElementaryApplicationService accElementaryApplicationService;
    
    
    @Override
    public List<AccAcntBean> findAccAcntList(Map<String, String> argsMap) {
        return accElementaryApplicationService.findAccAcntList(argsMap);
    }


}
