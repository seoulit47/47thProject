package com.seoulit.erp47.sup.checkup.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

public interface SupCheckupServiceFacade {
	/* 종합검진 예약관리 - 예약조회 */
    List<RsvtBean> findRsvtList(Map<String, String> argsMap);
    
    
    
    /* 종합검진 패키지관리 - 패키지 검사 조회 */
    List<InspBean> findPckInspList(Map<String, String> argsMap);
}
