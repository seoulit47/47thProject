
package com.seoulit.erp47.sup.checkup.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.applicationService.SupCheckupApplicationService;
import com.seoulit.erp47.sup.checkup.to.InspBean;
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

	 
	 /* 종합검진 예약관리 - 예약 조회 */
	 @Override               
	 public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	    List<RsvtBean> rsvtList = supCheckupApplicationService.findRsvtList(argsMap);
	    return rsvtList;
	 }
	 
	 
	 /* 종합검진 패키지관리 - 패키지 검사 조회 */
	 @Override               
	 public List<InspBean> findPckInspList(Map<String, String> argsMap) {
	    List<InspBean> inspList = supCheckupApplicationService.findPckInspList(argsMap);
	    return inspList;
	 }
}
