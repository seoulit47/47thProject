
package com.seoulit.erp47.sup.checkup.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.applicationService.SupCheckupApplicationService;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.ReceBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.service
 * @Class    SupCheckupServiceFacadeImpl.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   종합검진 서비스 퍼사드
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Service
public class SupCheckupServiceFacadeImpl implements SupCheckupServiceFacade{

	@Autowired
	   private SupCheckupApplicationService supCheckupApplicationService;

	 
	/* 종합검진 예약관리 - 예약목록 조회 */
	@Override               
	public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	   List<RsvtBean> rsvtList = supCheckupApplicationService.findRsvtList(argsMap);
	   return rsvtList;
	}
	
	/* 종합검진 예약관리 - 예약 취소 */
	@Override
	public void cancelRsvt(Map<String, String> argsMap) {
		supCheckupApplicationService.cancelRsvt(argsMap);
	}
	
	/* 종합검진 예약관리 - 저장 */
	@Override                
	public void batchRsvtProcess(Map<String, Object> map) {
	   supCheckupApplicationService.batchRsvtProcess(map);
	}
	 
	 
	/* 종합검진 패키지관리 - 패키지 검사목록 조회 */
	@Override               
	public List<InspBean> findInspList(Map<String, String> argsMap) {
	   List<InspBean> inspList = supCheckupApplicationService.findInspList(argsMap);
	   return inspList;
	}

	 /*종합검진 선택검사관리 - 선택 검사목록 조회*/
	@Override
	public List<ChoInspBean> findChoInspList(Map<String, String> argsMap) {
		List<ChoInspBean> choInspList = supCheckupApplicationService.findChoInspList(argsMap);
		return choInspList;
	}

	/* 종합검진 검사관리 - 선택 검사목록외 조회*/
	@Override
	public List<InspBean> findExChoInspList(Map<String, String> argsMap) {
		List<InspBean> exChoInspList = supCheckupApplicationService.findExChoInspList(argsMap);
		return exChoInspList;
	}

	/* 종합검진 수납 - 조회 */
	@Override
	public List<ReceBean> findReceList(Map<String, String> argsMap) {
		List<ReceBean> receList = supCheckupApplicationService.findReceList(argsMap);
		return receList;
	}
	
	/* 종합검진 수납 - 카드승인  */
	@Override                
    public void registerRece(ReceBean receBean) {
        supCheckupApplicationService.registerRece(receBean);
    }
	
	

}
