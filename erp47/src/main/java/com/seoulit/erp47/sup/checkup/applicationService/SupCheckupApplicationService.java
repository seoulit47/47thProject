package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

public interface SupCheckupApplicationService {
	/* 종합검진 예약관리 - 예약목록 조회 */
    public List<RsvtBean> findRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 검사목록 조회 */
    public List<InspBean> findInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록 조회*/
    public List<ChoInspBean> findChoInspList(Map<String, String> argsMap);
    
}
