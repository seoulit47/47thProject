package com.seoulit.erp47.log.prcs.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.prcs.applicationService.PrcsApplicationService;
import com.seoulit.erp47.log.prcs.to.PrcsReceiptBean;

@Service
public class PrcsServiceFacadeImpl implements PrcsServiceFacade {
    @Autowired
    PrcsApplicationService prcsApplicationService;

    @Override
    public List<PrcsReceiptBean> findPrcsReceiptList(Map<String, String> argsMap) {
        return prcsApplicationService.findPrcsReceiptList(argsMap);
    }

    @Override
    public void batchPrcsReceiptProcess(List<PrcsReceiptBean> prcsReceiptList) {
        prcsApplicationService.batchPrcsReceiptProcess(prcsReceiptList);
    }

    @Override
    public List<GdsAnspBean> findAnspList(Map<String, String> argsMap) {
        // TODO Auto-generated method stub
        return  prcsApplicationService.findAnspList(argsMap);
    }

    @Override
    public List<GdsAnspHistBean> findAnspHistList(GdsAnspHistBean anspHistBean) {
        // TODO Auto-generated method stub
        return prcsApplicationService.findAnspHistList(anspHistBean);
    }
}
