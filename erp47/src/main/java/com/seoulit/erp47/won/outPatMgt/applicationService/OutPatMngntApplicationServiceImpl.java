package com.seoulit.erp47.won.outPatMgt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.outPatMgt.dao.PatInfoDAO;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;

@Service
public class OutPatMngntApplicationServiceImpl implements OutPatMgtApplicationService{

	@Autowired
	PatInfoDAO patInfoDAO;
	
	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap){
		return patInfoDAO.selectPatList(argsMap);
	}
	
	@Override
    public PatInfoBean findPat(Map<String, String> argsMap){
        return patInfoDAO.selectPat(argsMap);
    }
}
