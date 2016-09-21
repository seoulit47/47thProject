package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AutoJourRuleBean;

public interface AutoJourRuleApplicationService {

    List<AutoJourRuleBean> findAutoJourRuleList(Map<String, String> argsMap);

}
