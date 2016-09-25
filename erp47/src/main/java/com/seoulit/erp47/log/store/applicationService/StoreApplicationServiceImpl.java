package com.seoulit.erp47.log.store.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.store.dao.PrcsWhsDAO;
import com.seoulit.erp47.log.store.dao.PrcsWhsHistDAO;
import com.seoulit.erp47.log.store.to.PrcsWhsBean;
import com.seoulit.erp47.log.store.to.PrcsWhsHistBean;

@Component
public class StoreApplicationServiceImpl implements StoreApplicationService{
	
	@Autowired
	PrcsWhsDAO prcsWhsDAO;
	@Autowired
	PrcsWhsHistDAO prcsWhsHistDAO;
	
	@Override
	public List<PrcsWhsBean> findPrcsWhsList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		//구매입고정보조회
		return prcsWhsDAO.findPrcsWhsList(argsMap);
	}

	@Override
	public List<PrcsWhsHistBean> findPrcsWhsHistList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		//구매입고내역조회
		return prcsWhsHistDAO.findPrcsWhsHistList(argsMap);
	}

	@Override
	public void batchPrcsWhsProcess(List<PrcsWhsBean> prcsWhsList) {
		// TODO Auto-generated method stub
		for(PrcsWhsBean prcsWhsBean : prcsWhsList){
			
				switch(prcsWhsBean.getStatus()){
				
						case "updated":
							prcsWhsDAO.updatePrcsWhs(prcsWhsBean);
					
					
				}
			
		}
	}

}
