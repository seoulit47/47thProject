package com.seoulit.erp47.sup.checkup.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.ReceBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

public interface SupCheckupServiceFacade {
	/* 종합검진 예약관리 - 예약목록 조회 */
    List<RsvtBean> findRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 예약 취소 */
    void cancelRsvt(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 저장 */
    void batchRsvtProcess(Map<String, Object> map);
    
    /* 종합검진 검사관리 - 검사목록 조회 */
    List<InspBean> findInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록 조회*/
    List<ChoInspBean> findChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록외 조회*/
    List<InspBean> findExChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 수납 - 조회*/
    List<ReceBean> findReceList(Map<String, String> argsMap);
    
    /* 종합검진 수납 - 카드승인 */
    void registerRece(ReceBean receBean);
    
   
    
}
