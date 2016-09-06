package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.InspBean;

public interface InspDAO {
    /* 종합검진 검사관리 - 조회 */
    List<InspBean> selectInspList(Map<String, String> argsMap);

 
}
