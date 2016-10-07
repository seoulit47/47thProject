package com.seoulit.erp47.log.prcs.applicationService;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.prcs.dao.PrcsReceiptDAO;
import com.seoulit.erp47.log.prcs.to.PrcsReceiptBean;

@Service
public class PrcsApplicationServiceImpl implements PrcsApplicationService {
    @Autowired
    PrcsReceiptDAO prcsReceiptDAO;

    @Override
    public List<PrcsReceiptBean> findPrcsReceiptList(Map<String, String> argsMap) {
    	
    	System.out.println("sizeeeee : " + argsMap.size());
    	for (Entry<String, String> entry : argsMap.entrySet()) {
    		System.out.println("keyyyyy : " + entry.getKey());
    		System.out.println("valllll : " + entry.getValue());
    		}
    	
        return prcsReceiptDAO.selectPrcsReceiptList(argsMap);
    }

    @Override
    public void batchPrcsReceiptProcess(List<PrcsReceiptBean> prcsReceiptList) {
        for(PrcsReceiptBean prcsReceiptBean : prcsReceiptList) {
            switch(prcsReceiptBean.getStatus()){
            case "inserted" :prcsReceiptDAO.insertPrcsReceipt(prcsReceiptBean); break;
            case "updated" :prcsReceiptDAO.updatePrcsReceipt(prcsReceiptBean); break;
            case "deleted" :prcsReceiptDAO.deletePrcsReceipt(prcsReceiptBean); break;
            }
        }
    }

    @Override
    public List<GdsAnspBean> findAnspList(Map<String, String> argsMap) {
        return prcsReceiptDAO.selectAnspList(argsMap);
    }

    @Override
    public List<GdsAnspHistBean> findAnspHistList(GdsAnspHistBean anspHistBean) {
        return prcsReceiptDAO.selectAnspHistList(anspHistBean);
    }
}
