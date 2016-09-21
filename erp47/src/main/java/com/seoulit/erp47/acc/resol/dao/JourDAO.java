package com.seoulit.erp47.acc.resol.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AutoJourRuleBean;
import com.seoulit.erp47.acc.resol.to.JourBean;

public interface JourDAO {

    List<AutoJourRuleBean> selectAutoJourRuleList(Map<String, String> argsMap);

    void insertJour(JourBean jourBean);

    void deleteJour(String resolNo);

    void updateJour(JourBean jourBean);

    List<JourBean> selectJourDetail(Map<String, String> argsMap);


}
