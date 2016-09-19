package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.PckBean;

public interface PckDAO {
	/* 종합검진 접수 - 패키지 조회 */
    List<PckBean> selectPckList(Map<String, String> argsMap);
	
    /* 종합검진 패키지관리 - 패키지 검사 조회 */
    List<InspBean> selectPckInspList(Map<String, String> argsMap);

    /* 종합검진 패키지관리 - 저장*/
    void insertPck(PckBean pckBean);
    void updatePck(PckBean pckBean);
    void deletePck(PckBean pckBean);
    void deletePckInsp(PckBean pckBean);
    void insertPckInsp(InspBean inspBean);
    void deletePckInsp2(InspBean inspBean);
    
    /* 종합검진 패키지관리 - EX 패키지 조회 */
    List<InspBean> selectExPckInspList(Map<String, String> argsMap);
}
