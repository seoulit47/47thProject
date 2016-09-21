package com.seoulit.erp47.acc.resol.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.PayRecBean;

public interface PayRecDAO {

    void insertPayRec(PayRecBean payRecBean);

    void deletePayRec(String resolNo);

    void updatePayRec(PayRecBean payRecBean);

    List<PayRecBean> selectPayRecDetail(Map<String, String> argsMap);


}
