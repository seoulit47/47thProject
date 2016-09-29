package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.RsltBean;

public interface RsltDAO {
    
    /* 종합검진 결과관리 - 결과조회 */
    List<RsltBean> selectRsltList(Map<String, String> argsMap);
    
    /* 종합검진 결과관리 - 저장 */
    void updateRslt(RsltBean rsltBean);
    
    /* 종합검진 결과관리 - 기초결과정보생성*/
    void insertBaseRsltList(String rsvtNo);

}
