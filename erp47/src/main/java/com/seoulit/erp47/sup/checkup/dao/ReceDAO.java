package com.seoulit.erp47.sup.checkup.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.ReceBean;

public interface ReceDAO {
    /* 종합검진 접수 - 수납조회 */
    List<ReceBean> selectReceList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 수납 - 카드승인 */
    void insertAprv(ReceBean receBean);
    void insertRece(ReceBean receBean);

}
