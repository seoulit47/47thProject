package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

public interface SupCheckupApplicationService {
	/* 종합검진 예약관리 - 예약 조회 */
    public List<RsvtBean> findRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 패키지관리 - 패키지 검사 조회 */
    public List<InspBean> findPckInspList(Map<String, String> argsMap);
    
}
