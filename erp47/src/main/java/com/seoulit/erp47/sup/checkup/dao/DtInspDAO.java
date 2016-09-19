package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.DtInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;

public interface DtInspDAO {
    /* 종합검진 세부검사관리 - 검사 조회 */
    List<InspBean> selectSimpleInspList(Map<String, String> argsMap);

    /* 종합검진 세부검사관리 - 세부검사 조회 */
    List<DtInspBean> selectDtInspList(Map<String, String> argsMap);

    /* 종합검진 검사관리 - 수정, 추가*/
    void insertDtInsp(DtInspBean dtInspBean);
    void updateDtInsp(DtInspBean dtInspBean);
}
