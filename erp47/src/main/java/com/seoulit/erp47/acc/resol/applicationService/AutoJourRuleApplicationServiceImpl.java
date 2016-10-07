package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.JourDAO;
import com.seoulit.erp47.acc.resol.to.AutoJourRuleBean;

@Service
public class AutoJourRuleApplicationServiceImpl implements AutoJourRuleApplicationService{
    @Autowired
    JourDAO jourDAO;

    @Override
    public List<AutoJourRuleBean> findAutoJourRuleList(Map<String, String> argsMap) {
    	List<AutoJourRuleBean> list=jourDAO.selectAutoJourRuleList(argsMap);
        return list;
    }
}
