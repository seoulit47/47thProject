package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.baseInfo.dao.FeeDAO;
import com.seoulit.erp47.won.baseInfo.to.FeeBean;

@Component
public class FeeApplicationServiceImpl implements FeeApplicationService{

	@Autowired
	FeeDAO feeDAO;
	
	@Override
	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return feeDAO.findFeeListEMR(argsMap);
	}

	
	
}
