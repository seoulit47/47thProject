package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.RsvtBean;

public interface RsvtDAO {

    /* 종합검진 예약관리 - 예약조회 */
    List<RsvtBean> selectRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 예약취소 */
    void updateRsvtYN(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 예약번호 생성*/
    String callCreateNewRsvtNo(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 저장 */
    void insertRsvt(RsvtBean rsvt);
    void updateRsvt(RsvtBean rsvt);
    
 
}
