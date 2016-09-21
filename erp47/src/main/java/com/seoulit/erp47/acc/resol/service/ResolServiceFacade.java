package com.seoulit.erp47.acc.resol.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AccountBean;
import com.seoulit.erp47.acc.resol.to.AutoJourRuleBean;
import com.seoulit.erp47.acc.resol.to.ResolLetBean;

public interface ResolServiceFacade {

    List<ResolLetBean> findResolLetList(Map<String, String> argsMap);

    List<AccountBean> findAccount(Map<String, String> argsMap);

    String getResolNo();

    List<AutoJourRuleBean> findAutoJourRuleList(Map<String, String> argsMap);

    void registResolLet(HashMap<String, Object> dataSetMap);

    void batchResolLetProcess(HashMap<String, Object> dataSetMap);

    ResolLetBean findResolLetDetail(Map<String, String> argsMap);


}
