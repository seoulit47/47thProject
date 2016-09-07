package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;

public interface InspDAO {
    /* 종합검진 검사관리 - 검사목록 조회 */
    List<InspBean> selectInspList(Map<String, String> argsMap);

    /* 종합검진 검사관리 - 선택 검사목록 조회*/
    List<ChoInspBean> selectChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록외 조회*/
    List<InspBean> selectExChoInspList(Map<String, String> argsMap);
}
